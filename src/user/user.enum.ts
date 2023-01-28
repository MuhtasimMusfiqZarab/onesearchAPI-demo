import { registerEnumType } from '@nestjs/graphql';

export enum UserAccessRole {
  Demo = 'demo',
  Silver = 'silver',
  Gold = 'gold',
  VIP = 'vip',
  Admin = 'admin',
  Provider = 'provider',
}
registerEnumType(UserAccessRole, { name: 'UserAccessRole' });

export enum AuthProvider {
  Google = 'google',
}
registerEnumType(AuthProvider, { name: 'AuthProvider' });
