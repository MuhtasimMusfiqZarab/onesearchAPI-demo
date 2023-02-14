import { Entity, Column, ManyToOne } from 'typeorm';
import { ExtendedBaseEntity } from '../config/_base.entity';
import User from 'src/user/user.entity';

@Entity()
export default class Payment extends ExtendedBaseEntity {
  @Column({ type: 'varchar' })
  payment_ID: string;

  @Column({ type: 'float' })
  amount: number;

  @ManyToOne(
    () => User,
    user => user.payments,
  )
  user: User;
}
