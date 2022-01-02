var dbConfig = {
  migrations: ['migration/*.js'],
  cli: {
    migrationsDir: 'migration',
  },
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['**/*.entity.js'],
      synchronize: true,
    });
    break;

  case 'production':
    Object.assign(dbConfig, {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['**/*.entity.js'],
      synchronize: true,
    });
    break;

  default:
    Object.assign(dbConfig, {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['**/*.entity.js'],
      synchronize: true,
    });
    break;
}

module.exports = dbConfig;
