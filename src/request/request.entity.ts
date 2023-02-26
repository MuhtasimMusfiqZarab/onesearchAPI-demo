import { Entity, Column } from 'typeorm';
import { ExtendedBaseEntity } from '../config/_base.entity';

import { RequestStatusEnum } from './request.enum';

@Entity()
export default class Request extends ExtendedBaseEntity {
  @Column({ type: 'varchar', nullable: true })
  platform: string;

  @Column({ type: 'varchar', nullable: true })
  category: string;

  @Column({ type: 'varchar', nullable: true })
  location: string;

  @Column({ type: 'int', nullable: true })
  datasize: number;

  @Column({
    type: 'enum',
    enum: RequestStatusEnum,
    default: RequestStatusEnum.Requested,
  })
  status: RequestStatusEnum;

  @Column({ type: 'text', nullable: true })
  description: string;
}
