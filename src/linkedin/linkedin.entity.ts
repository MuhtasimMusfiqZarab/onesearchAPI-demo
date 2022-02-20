import { Entity, Column } from 'typeorm';
import { ExtendedBaseEntity } from '../config/_base.entity';

@Entity()
export default class Linkedin extends ExtendedBaseEntity {
  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar' })
  fullName: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  company: string;

  @Column({ type: 'varchar' })
  location: string;

  @Column({ type: 'varchar' })
  url: string;
}
