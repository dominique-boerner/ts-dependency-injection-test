import DatabaseConfig from "../database-config.ts";

/**
 * Interface which abstracts operations of a database.
 */
export interface DatabaseProvider {
  /**
   * Connect to a database via a database configuration.
   * @param databaseConfig {DatabaseConfig}
   */
  connect(databaseConfig: DatabaseConfig): void;

  /**
   * Select operation, used to get database entries.
   */
  select?<T>(): T;
}
