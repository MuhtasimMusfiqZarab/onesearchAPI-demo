import { Entity, Column, Unique } from 'typeorm';

import { ExtendedBaseEntity } from '../config/_base.entity';

@Entity('subscription')
@Unique('unique_id', ['id'])
export class Subscription extends ExtendedBaseEntity {
  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'double' })
  price: string;

  @Column({ type: 'bigint' })
  totalTimestamp: number;

  @Column({ type: 'int' })
  totalCoins: number;

  @Column({ type: 'int', nullable: true })
  discountPercentage: number;

  @Column({ type: 'json' })
  benefits: string[];
}
