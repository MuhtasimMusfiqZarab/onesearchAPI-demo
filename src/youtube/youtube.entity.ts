import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { ExtendedBaseEntity } from '../config/_base.entity';

import YoutubeLocation from 'src/youtube-location/youtube-location.entity';

@Entity()
export default class Youtube extends ExtendedBaseEntity {
  @Column({ type: 'varchar', nullable: true })
  socialblade_category: string;

  @PrimaryColumn({
    type: 'varchar',
    length: 100,
  })
  channel_url: string;

  @Column({ type: 'varchar', nullable: true })
  bio_email: string;

  @Column({ type: 'bigint', nullable: true })
  subscribers: number;

  // @Column({ type: 'varchar', nullable: true })
  // location: string;

  @ManyToOne(
    () => YoutubeLocation,
    youtubeLocation => youtubeLocation.channels,
  )
  location: YoutubeLocation;

  @Column({ type: 'varchar', nullable: true })
  channel_name: string;

  @Column({ type: 'date', nullable: true })
  timestamp: Date;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  instagram: string;

  @Column({ type: 'varchar', nullable: true })
  twitter: string;

  @Column({ type: 'varchar', nullable: true })
  facebook: string;

  @Column({ type: 'varchar', nullable: true })
  tiktok: string;

  @Column({ type: 'varchar', nullable: true })
  pinterest: string;

  @Column({ type: 'varchar', nullable: true })
  others: string;

  @Column({ type: 'varchar', nullable: true })
  joined: string;

  @Column({ type: 'bigint', nullable: true })
  views: number;

  @Column({ type: 'tinyint', width: 1, nullable: true, default: null })
  socialblade_similar_scraped: string;
}
