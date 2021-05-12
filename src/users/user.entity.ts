import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({ default: 'asdf' })
  userName: string;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ default: new Date().toISOString() })
  createDate: string;

  @Column({ default: new Date().toISOString() })
  lastUpdateDate: string;

  @Column()
  email: string;

  @Column({ default: 'asdfsdfae' })
  employeeId: string;

  @Column()
  password: string;

  @Column({ default: 'pp' })
  profilePicture: string;
}
