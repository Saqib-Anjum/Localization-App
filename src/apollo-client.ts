import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://fakestoreapi.com/products' }),
  cache: new InMemoryCache(),
});

export default client;
