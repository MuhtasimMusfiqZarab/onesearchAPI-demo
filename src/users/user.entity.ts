import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ExtendedBaseEntity } from '../config/_base.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
export class User extends ExtendedBaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;
}
