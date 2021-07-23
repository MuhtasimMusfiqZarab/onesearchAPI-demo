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
      synchronize: false,
      entities: ['dist/**/*.entity{.ts,.js}'],
      //thrown error in the server while runnig
      // keepConnectionAlive: true,
    };
  }
}

export default OrmConfig;
