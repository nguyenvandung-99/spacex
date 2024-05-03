import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launches: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,
  
            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          }
        }
      }
    }
  }),
});

export default apolloClient;
