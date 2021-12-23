import {
  BaseEntity,
  Entity,
  PrimaryColumn,
  Column,
  Unique,
  CreateDateColumn,
  Generated,
} from 'typeorm';

@Entity('youtube_details')
@Unique('unique_id', ['id'])
export class Youtube extends BaseEntity {
  @Column({ type: 'bigint' })
  @Generated()
  id: number;

  @Column({ type: 'text', nullable: true })
  socialblade_category: string;

  @PrimaryColumn({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  channel_url: string;

  @Column({ type: 'text', nullable: true })
  bio_email: string;

  @Column({ type: 'bigint', nullable: true, default: null })
  subscribers: number;

  @Column({ type: 'text', nullable: true })
  location: string;

  @Column({ type: 'mediumtext', nullable: true })
  channel_name: string;

  @CreateDateColumn({
    precision: null,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  timestamp: Date;

  @Column({ type: 'longtext', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  instagram: string;

  @Column({ type: 'text', nullable: true })
  twitter: string;

  @Column({ type: 'text', nullable: true })
  facebook: string;

  @Column({ type: 'text', nullable: true })
  tiktok: string;

  @Column({ type: 'text', nullable: true })
  pinterest: string;

  @Column({ type: 'text', nullable: true })
  others: string;

  @Column({ type: 'text', nullable: true })
  joined: string;

  @Column({ type: 'text', nullable: true })
  views: string;

  @Column({ type: 'tinyint', width: 1, nullable: true, default: null })
  socialblade_similar_scraped: string;
}
