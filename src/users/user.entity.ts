import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { ExtendedBaseEntity } from '../config/_base.entity';
import { UserAccessRole } from './user.enum';

import Profile from 'src/profile/profile.entity';

@Entity()
export default class User extends ExtendedBaseEntity {
  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  avatarLink: string;

  @Column({ type: 'varchar', nullable: true })
  token: string;

  @Column({ nullable: true })
  authProvider: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: UserAccessRole,
    default: UserAccessRole.Demo,
  })
  accessRole: UserAccessRole;

  @Column({ type: 'varchar', length: 10, default: 'en' })
  language: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
