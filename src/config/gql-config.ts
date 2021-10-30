import { GqlModuleOptions } from '@nestjs/graphql';
import { join } from 'path';

class GqlConfig {
  public getGQLConfig(): GqlModuleOptions {
    return {
      // defining the generated schema file name and location
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // sorting the schema lexicographically
      sortSchema: true,
      playground: true,
    };
  }
}
export default GqlConfig;
