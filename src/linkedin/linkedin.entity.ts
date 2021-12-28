import { Entity, Column } from 'typeorm';
import { ExtendedBaseEntity } from '../config/_base.entity';

@Entity()
export default class Linkedin extends ExtendedBaseEntity {
  @Column({ type: 'varchar', nullable: true })
  refId: string;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;
}
