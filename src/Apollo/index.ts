import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});
