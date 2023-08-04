import { Database } from "./database.ts";

export default class DatabaseConnector {
  private readonly db: Database;

  constructor(readonly database: Database) {
    this.db = database;
  }

  public connect() {
    this.db.connect();
  }
}
