import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { readFileSync } from 'fs'
import { ExampleQuery, ExampleMutation } from './src'

const resolvers = {
  Query: {
    getBooks: ExampleQuery.resolver
  },
  Mutation: {
    setBooks: ExampleMutation.resolver
  }
}

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' })

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}`)
