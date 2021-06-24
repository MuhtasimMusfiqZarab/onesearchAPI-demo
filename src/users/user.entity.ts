import { Entity, Column } from 'typeorm';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

export enum UserAccessRole {
  Employee = 'employee',
  Facilitator = 'facilitator',
  CompanyAdmin = 'company-admin',
  RtsAdmin = 'rts-admin',
}
registerEnumType(UserAccessRole, { name: 'UserAccessRole' });

export enum AuthProvider {
  Cognito = 'cognito',
  ADFS = 'adfs',
}
registerEnumType(AuthProvider, { name: 'AuthProvider' });

@ObjectType()
@Entity()
export default class User extends ExtendedBaseEntity {
  @Field({ nullable: true })
  @Column({ type: 'varchar', nullable: true, unique: true })
  userId: string;

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
  key: string;

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
    default: UserAccessRole.Employee,
  })
  accessRole: UserAccessRole;

  @Field()
  @Column({ type: 'varchar', length: 10, default: 'en' })
  language: string;
}
