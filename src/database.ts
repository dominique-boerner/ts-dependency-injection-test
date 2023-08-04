export interface Database {
  connect(): void;
}

export class MySql implements Database {
  connect() {
    // connect logic for MySQL here...
    console.log("Connected to MySQL!");
  }
}

export class Postgres implements Database {
  connect() {
    // connect logic for Postgres here...
    console.log("Connected to Postgres!");
  }
}
