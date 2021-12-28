import { Module } from '@nestjs/common';
import { GoogleService } from './google.service';
import { GoogleResolver } from './google.resolver';

@Module({
  providers: [GoogleService, GoogleResolver]
})
export class GoogleModule {}
