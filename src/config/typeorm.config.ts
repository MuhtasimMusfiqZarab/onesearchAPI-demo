import { TypeOrmModuleOptions } from '@nestjs/typeorm';

//configuration for database connection
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'H4DvVLcxW5paef',
  database: 'youtube',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
