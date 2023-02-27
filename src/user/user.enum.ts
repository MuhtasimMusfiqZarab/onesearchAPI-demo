import { registerEnumType } from '@nestjs/graphql';

export enum UserAccessRole {
  Demo = 'demo',
  Admin = 'admin',
  Provider = 'provider',
  Pro = 'pro',
}
registerEnumType(UserAccessRole, { name: 'UserAccessRole' });

export enum AuthProvider {
  Google = 'google',
}
registerEnumType(AuthProvider, { name: 'AuthProvider' });
