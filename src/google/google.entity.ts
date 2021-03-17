import {
  BaseEntity,
  Entity,
  PrimaryColumn,
  Column,
  Unique,
  CreateDateColumn,
} from 'typeorm';

@Entity('gmaps_details')
@Unique('unique_id', ['gmaps_url'])
export class Google extends BaseEntity {
  @Column({ type: 'text', nullable: true })
  query_parameter: string;

  @PrimaryColumn({
    type: 'varchar',
    length: 300,
  })
  company: string;

  @Column({ type: 'float', nullable: true, default: null })
  rating: number;

  @Column({ type: 'text', nullable: true })
  category: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @PrimaryColumn({ type: 'varchar', length: 40 })
  phone: string;

  @Column({ type: 'text', nullable: true })
  website: string;

  @Column({ type: 'text', nullable: true })
  street: string;

  @Column({ type: 'text', nullable: true })
  city: string;

  @Column({ type: 'text', nullable: true })
  postcode: string;

  @Column({ type: 'text', nullable: true })
  country: string;

  @Column({ type: 'text', nullable: true })
  claim_status: string;

  @Column({ type: 'int', nullable: true, default: null })
  reviews: number;

  @Column({ type: 'longtext', nullable: true })
  review_data: string;

  @Column({ type: 'longtext', nullable: true })
  gmaps_url: string;

  @CreateDateColumn({
    precision: null,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  timestamp: Date;
}
