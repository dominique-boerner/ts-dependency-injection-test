import { DatabaseProvider } from "./database-provider.interface.ts";
import DatabaseConfig from "../database-config.ts";

export class PostgresProvider implements DatabaseProvider {
  connect(databaseConfig: DatabaseConfig) {
    // connect logic for Postgres here...
    console.log(
      `Connected to Postgres on ${databaseConfig.getConnectionUrl()}!`,
    );
  }
}
