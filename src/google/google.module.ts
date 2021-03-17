import { Module } from '@nestjs/common';
import { GoogleResolver } from './google.resolver';

@Module({
  providers: [GoogleResolver],
})
export class GoogleModule {}
