import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const URLS = {
    development: 'http://localhost:8000/graphql',
    production: 'https://star-wars-gql-api.herokuapp.com/graphql'
}
const ENVIRONMENT = process.env.NODE_ENV
const link = new HttpLink({uri: URLS[ENVIRONMENT]})
const cache = new InMemoryCache()

const client = new ApolloClient({link,cache})
console.log(ENVIRONMENT)
export default client