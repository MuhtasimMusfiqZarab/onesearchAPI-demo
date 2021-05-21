import { BaseConfig } from './_base-config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

class OrmConfig extends BaseConfig {
  // { [key: string]: string | undefined } -> custom type for environment variables
  constructor(env: { [key: string]: string | undefined }) {
    super(env);
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      // can't assign the DB_TYPE value from ENV as this type takes only a set static values fixed by TypeOrmModuleOptions
      type: 'mysql',

      host: this.getValue('DB_HOST'),
      port: parseInt(this.getValue('DB_PORT')),
      username: this.getValue('DB_USER'),
      password: this.getValue('DB_PASSWORD'),
      database: this.getValue('DB_NAME'),

      /**
       * if `synchronize` is set to true, any change in the db
       * schema will cause to loose all the data on that table.
       * we are using migrations instead
       **/
      synchronize: false,

      entities: ['dist/**/*.entity{.ts,.js}'],
      // subscribers: ['dist/subscriber/*{.ts,.js}'],
      // migrations: ['dist/migration/*{.ts,.js}'],
      // migrationsTableName: 'migration',

      // cli: {
      //   entitiesDir: 'src/entities',
      //   migrationsDir: 'src/migration',
      //   subscribersDir: 'src/subscriber',
      // },
    };
  }
}

//== Mandatory fields for connection
// type: '',
// host: '',
// port: 3306,
// username: '',
//database: '',
//entities: [__dirname + '/../**/*.entity.{js,ts}'],
//synchronize: false,

export default OrmConfig;
