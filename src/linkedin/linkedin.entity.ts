import { Entity, Column } from 'typeorm';
import { ExtendedBaseEntity } from '../config/_base.entity';

@Entity()
export default class Linkedin extends ExtendedBaseEntity {
  @Column({ type: 'varchar', nullable: true })
  firstName: string;

  @Column({ type: 'varchar', nullable: true })
  lastName: string;

  @Column({ type: 'varchar', nullable: true })
  fullName: string;

  @Column({ type: 'varchar', nullable: true })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  company: string;

  @Column({ type: 'varchar', nullable: true })
  location: string;

  @Column({ type: 'varchar' })
  url: string;
}
