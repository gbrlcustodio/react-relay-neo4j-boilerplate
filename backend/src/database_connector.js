import { v1 as neo4j } from "neo4j-driver";

export const driver = neo4j.driver("bolt://database:7687");
