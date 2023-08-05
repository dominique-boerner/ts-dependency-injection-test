import { DatabaseProvider } from "./database-provider.interface.ts";
import DatabaseConfig from "../database-config.ts";

export class MysqlProvider implements DatabaseProvider {
  connect(databaseConfig: DatabaseConfig) {
    // connect logic for MySQL here...
    console.log(`Connected to MySQL on ${databaseConfig.getConnectionUrl()}!`);
  }
}
