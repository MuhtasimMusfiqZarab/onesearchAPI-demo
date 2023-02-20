import { registerEnumType } from '@nestjs/graphql';

export enum RequestStatusEnum {
  Requested = 'requested',
  Processing = 'processing',
  Resolved = 'resolved',
  Invalid = 'invalid',
}
registerEnumType(RequestStatusEnum, { name: 'RequestStatusEnum' });
