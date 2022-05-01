import { Entity, Column, ManyToOne } from 'typeorm';
import { ExtendedBaseEntity } from '../config/_base.entity';
import Restaurant from 'src/restaurant/restaurant.entity';

@Entity()
export default class Availability extends ExtendedBaseEntity {
  @Column({ type: 'varchar' })
  dayName: string;

  @Column({ type: 'varchar' })
  startTime: string;

  @Column({ type: 'varchar' })
  endTime: string;

  @ManyToOne(
    () => Restaurant,
    restaurant => restaurant.availabilities,
  )
  Restaurant: Restaurant;
}
