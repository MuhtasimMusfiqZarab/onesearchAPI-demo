import { Entity, Column, ManyToOne } from 'typeorm';

import { ExtendedBaseEntity } from '../config/_base.entity';

@Entity()
export default class Profile extends ExtendedBaseEntity {
  @Column({ type: 'varchar', nullable: true })
  phoneNumber: string;

  @Column({ type: 'varchar', nullable: true })
  country: string;

  @Column({ type: 'varchar', nullable: true })
  city: string;

  @Column({ type: 'int', nullable: true })
  availableCredits: number;
}
