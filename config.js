// Runtime settings. Everything the app needs from its environment is read here.
module.exports = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 8080,
  databaseUrl: process.env.DATABASE_URL || process.env.PG_URL,
  pageSize: 20,
};
