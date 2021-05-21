import { GqlModuleOptions } from '@nestjs/graphql';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BaseConfig } from './_base-config';
import OrmConfig from './orm-config';
import GqlConfig from './gql-config';

require('dotenv').config();

class ConfigService extends BaseConfig {
  private configORM: OrmConfig;
  private configGQL: GqlConfig;

  // { [key: string]: string | undefined } -> custom type for environment variables
  constructor(env: { [key: string]: string | undefined }) {
    super(env);
    this.configORM = new OrmConfig(process.env);
    this.configGQL = new GqlConfig();
  }

  // not being used atm
  public getPort() {
    return this.getValue('PORT', true);
  }

  // for later use
  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getGqlConfig(): GqlModuleOptions {
    return this.configGQL.getGQLConfig();
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return this.configORM.getTypeOrmConfig();
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'DB_HOST',
  'DB_PORT',
  'DB_USER',
  'DB_PASSWORD',
  'DB_NAME',
]);

export { configService };
