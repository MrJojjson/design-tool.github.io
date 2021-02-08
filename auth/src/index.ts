import { join } from "path";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { keys } from "./config/keys";
import passport from "passport";
import { json } from "body-parser";
import { connect } from "mongoose";
import resolvers from "./resolvers";
import cors from "cors";

const schema = loadSchemaSync(join(__dirname, "./schemas/*.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

const app = express();

app.use(cors());
app.use(json());

connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log("Connected to AUTH database"))
  .catch((err) => console.log(err));

app.use(passport.initialize());
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("./config/passport")(passport);
app.use(
  "/graphql/auth",
  graphqlHTTP({
    schema: schemaWithResolvers,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Auth server is listening on port: ${PORT}`);
});
