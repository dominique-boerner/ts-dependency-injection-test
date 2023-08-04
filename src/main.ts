import DatabaseConnector from "./database-connector.ts";
import { Postgres } from "./database.ts";

const db = new Postgres();

const databaseConnector = new DatabaseConnector(db);
databaseConnector.connect();
