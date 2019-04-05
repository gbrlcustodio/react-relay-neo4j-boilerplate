import express from "express";
import graphqlHTTP from "express-graphql";
import { makeAugmentedSchema } from "neo4j-graphql-js";
import typeDefs from "./typeDefs";

const app = express();

const schema = makeAugmentedSchema({ typeDefs });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(3000);
