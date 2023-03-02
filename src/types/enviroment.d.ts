declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPRESS_PORT: string;
      SQL_SERVER_PORT: string;
      ISSABEL_PORT: string;
      AIRTABLE_ACCESS_TOKEN: string;
      ENV: "dev" | "prod";
    }
  }
}

export {};
