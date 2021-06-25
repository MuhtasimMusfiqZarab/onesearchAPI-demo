import { Entity, Column } from 'typeorm';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

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

@ObjectType()
@Entity()
export default class User extends ExtendedBaseEntity {
  @Field()
  @Column({ type: 'varchar' })
  firstName: string;

  @Field()
  @Column({ type: 'varchar' })
  lastName: string;

  @Field()
  @Column({ type: 'varchar', unique: true })
  email: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', nullable: true })
  avatarLink: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', nullable: true })
  token: string;

  @Field(() => AuthProvider, { nullable: true })
  @Column({ nullable: true })
  authProvider: string;

  @Field()
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Field(() => UserAccessRole)
  @Column({
    type: 'enum',
    enum: UserAccessRole,
    default: UserAccessRole.Demo,
  })
  accessRole: UserAccessRole;

  @Field()
  @Column({ type: 'varchar', length: 10, default: 'en' })
  language: string;
}
