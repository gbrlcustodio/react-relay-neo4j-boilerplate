import { v1 as neo4j } from 'neo4j-graphql-js'

export const driver = neo4j.driver(
  'bolt://localhost:7687',
)