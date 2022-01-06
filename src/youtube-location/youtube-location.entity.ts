import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ExtendedBaseEntity } from '../config/_base.entity';

import Youtube from 'src/youtube/youtube.entity';

@Entity()
export default class YoutubeLocation extends ExtendedBaseEntity {
  @Column({ type: 'varchar' })
  country: string;

  @OneToMany(
    () => Youtube,
    youtube => youtube.location,
  )
  channels: Youtube[];
}
