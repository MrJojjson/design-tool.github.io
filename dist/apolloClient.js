import {MultiAPILink} from "../_snowpack/pkg/@habx/apollo-multi-endpoint-link.js";
import {ApolloClient, InMemoryCache, ApolloLink, createHttpLink} from "../_snowpack/pkg/@apollo/client.js";
export const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    new MultiAPILink({
      endpoints: {
        design: process.env.SNOWPACK_PUBLIC_SERVER_URL,
        auth: process.env.SNOWPACK_PUBLIC_AUTH_URL
      },
      createHttpLink: () => createHttpLink()
    })
  ]),
  cache: new InMemoryCache()
});
