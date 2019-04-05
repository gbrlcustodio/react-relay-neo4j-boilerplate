import express from "express";
import expressGraphQL from "express-graphql";
import { makeAugmentedSchema } from "neo4j-graphql-js";
import { driver } from "./database_connector";
import typeDefs from "./typeDefs";

const app = express();
const PORT = process.env.PORT || 3000;
const schema = makeAugmentedSchema({ typeDefs });

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
    context: {
      driver
    }
  })
);

app.listen(PORT);
