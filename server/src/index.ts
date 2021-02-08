import { json } from "body-parser";
import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { connect } from "mongoose";
import { schemas } from "./schemas/index";

const app = express();

app.use(cors());
app.use(json());
app.use("/graphql", graphqlHTTP({ schema: schemas, graphiql: true }));

connect(
  "mongodb://127.0.0.1:27017/design-tool",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    forceServerObjectId: true,
  },
  () => {
    console.log("connected to DESIGN TOOL database");
  }
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Design tool server is listening on port: ${PORT}`);
});
