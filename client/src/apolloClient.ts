import { MultiAPILink } from '@habx/apollo-multi-endpoint-link';
import { ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client';

// export const apolloClient = new ApolloClient({
//     uri: 'http://localhost:3002/api/graphql/auth',
//     cache: new InMemoryCache(),
// });

export const apolloClient = new ApolloClient({
    link: ApolloLink.from([
        new MultiAPILink({
            endpoints: {
                design: 'http://localhost:3001/graphql',
                auth: 'http://localhost:3002/graphql/auth',
            },
            createHttpLink: () => createHttpLink(),
        }),
    ]),
    cache: new InMemoryCache(),
});
