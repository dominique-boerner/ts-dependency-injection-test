import DatabaseConnector from "./examples/simple-database-connection/database-connector.ts";
import { PostgresProvider } from "./examples/simple-database-connection/database-provider/postres-provider.ts";
import DatabaseConfig from "./examples/simple-database-connection/database-config.ts";

const db = new PostgresProvider();
const dbConfig = new DatabaseConfig({
  url: "http://localhost",
  port: 10000,
});

const databaseConnector = new DatabaseConnector(db, dbConfig);
databaseConnector.connect();
