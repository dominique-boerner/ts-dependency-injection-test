/**
 * Configuration for databases.
 */
export default class DatabaseConfig {
  url: string;
  port: number;

  constructor(config: { url: string; port: number }) {
    this.url = config.url;
    this.port = config.port;
  }

  public getConnectionUrl() {
    return `${this.url}/${this.port}`;
  }
}
