import { DatabaseProvider } from "./database-provider/database-provider.interface.ts";
import DatabaseConfig from "./database-config.ts";

export default class DatabaseConnector {
  constructor(
    private readonly database: DatabaseProvider,
    private readonly databaseConfig: DatabaseConfig,
  ) {}

  public connect() {
    this.database.connect(this.databaseConfig);
  }
}
