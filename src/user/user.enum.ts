import { registerEnumType } from '@nestjs/graphql';

export enum UserAccessRole {
  Demo = 'demo',
  Pro = 'pro',
  Admin = 'admin',
  Developer = 'developer',
  Support = 'support',
}
registerEnumType(UserAccessRole, { name: 'UserAccessRole' });

export enum AuthProvider {
  Google = 'google',
}
registerEnumType(AuthProvider, { name: 'AuthProvider' });
