import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ExtendedBaseEntity } from '../config/_base.entity';
import { UserAccessRole } from './user.enum';

import Profile from 'src/profile/profile.entity';
import Payment from 'src/payment/payment.entity';
import Request from 'src/request/request.entity';
import Youtube from 'src/youtube/youtube.entity';

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

  @Column({ type: 'varchar', nullable: true })
  phoneNumber: string;

  @Column({ type: 'varchar', nullable: true })
  country: string;

  @Column({ type: 'varchar', nullable: true })
  city: string;

  @Column({ type: 'varchar', nullable: true })
  reviewText: string;

  @Column({ type: 'int', nullable: true })
  rating: number;

  @Column({ type: 'int', nullable: true })
  availableCredits: number;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @OneToMany(
    () => Payment,
    payment => payment.user,
    {
      nullable: true,
    },
  )
  payments: Payment[];

  @OneToMany(
    () => Request,
    request => request.user,
    {
      nullable: true,
    },
  )
  requests: Request[];

  @ManyToMany(() => Youtube)
  @JoinTable()
  youtube: Youtube[];
}
