import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'https://countries.trevorblades.com',

  //   uri: `${process.env.REACT_APP_API_URL}/graphql` as any,
  uri: `http://localhost:9000/graphql` as any,
  cache: new InMemoryCache(),
});

export default client;
