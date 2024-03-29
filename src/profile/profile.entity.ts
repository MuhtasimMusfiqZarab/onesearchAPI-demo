import { Entity, Column } from 'typeorm';

import { ExtendedBaseEntity } from '../config/_base.entity';

@Entity()
export default class Profile extends ExtendedBaseEntity {
  @Column({ type: 'varchar', nullable: true })
  phoneNumber: string;

  @Column({ type: 'varchar', nullable: true })
  country: string;

  @Column({ type: 'varchar', nullable: true })
  city: string;

  @Column({ type: 'varchar', nullable: true })
  review: string;

  @Column({ type: 'int', nullable: true })
  availableCredits: number;
}
