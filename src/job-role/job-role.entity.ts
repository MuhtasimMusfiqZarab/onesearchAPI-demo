import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
} from 'typeorm';

@Entity('job_role')
@Unique(['roleName'])
export class JobRole extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  roleId: string;

  @Column()
  roleName: string;
}
