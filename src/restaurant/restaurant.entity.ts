import { Entity, Column, OneToMany } from 'typeorm';
import { ExtendedBaseEntity } from '../config/_base.entity';

import Availability from 'src/availability/availability.entity';

@Entity()
export default class Restaurant extends ExtendedBaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(
    () => Availability,
    availability => availability.Restaurant,
    {
      nullable: true,
    },
  )
  availabilities: Availability[];
}
