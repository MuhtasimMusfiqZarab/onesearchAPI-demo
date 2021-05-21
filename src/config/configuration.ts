export default function() {
  return {
    type: 'mysql',
    host: 'vmi427508.contaboserver.net',
    port: 3306,
    username: 'root',
    password: 'H4DvVLcxW5paef',
    database: 'youtube',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false,
  };
}
