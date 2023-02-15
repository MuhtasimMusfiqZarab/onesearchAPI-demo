import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ExtendedBaseEntity } from '../config/_base.entity';

@Entity()
export default class Request extends ExtendedBaseEntity {
  @Column({ type: 'varchar', nullable: true })
  category: string;

  @Column({ type: 'varchar', nullable: true })
  location: string;

  @Column({ type: 'text', nullable: true })
  description: string;
}
