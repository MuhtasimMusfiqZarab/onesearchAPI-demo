import { Entity, Column, ManyToOne } from 'typeorm';

import { ExtendedBaseEntity } from '../config/_base.entity';

@Entity()
export default class Profile extends ExtendedBaseEntity {
  @Column({ type: 'varchar' })
  phoneNumber: string;

  @Column({ type: 'varchar' })
  country: string;

  @Column({ type: 'varchar' })
  city: string;

  @Column({ type: 'int' })
  availableCredits: number;
}
