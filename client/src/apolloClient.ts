import { MultiAPILink } from '@habx/apollo-multi-endpoint-link';
import { ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client';
const { SNOWPACK_PUBLIC_SERVER_URL, SNOWPACK_PUBLIC_AUTH_URL } = import.meta.env;

// export const apolloClient = new ApolloClient({
//     uri: 'http://localhost:3002/graphql',
//     cache: new InMemoryCache(),
// });

export const apolloClient = new ApolloClient({
    link: ApolloLink.from([
        new MultiAPILink({
            endpoints: {
                design: 'http://localhost:3001',
                // auth: 'https://poletas.herokuapp.com',
                auth: 'http://localhost:3002',
            },
            createHttpLink: () => createHttpLink(),
        }),
    ]),
    cache: new InMemoryCache(),
});
