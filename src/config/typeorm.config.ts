import { TypeOrmModuleOptions } from '@nestjs/typeorm';

//configuration for database connection

export const typeOrmConfig: any = {
  type: 'mysql',
  host: 'vmi427508.contaboserver.net',
  port: 3306,
  username: 'root',
  password: 'H4DvVLcxW5paef',
  database: 'youtube',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false,
};

export const typeOrmConfig1: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'vmi427508.contaboserver.net',
  port: 3306,
  username: 'root',
  password: 'H4DvVLcxW5paef',
  database: 'google_maps',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false,
};
