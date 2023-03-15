import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import User from 'src/user/user.entity';
import Youtube from 'src/youtube/youtube.entity';

@Entity('user_youtube')
export default class User_Youtube {
  @PrimaryColumn({ type: 'varchar' })
  userId: string;

  @PrimaryColumn({ type: 'varchar' })
  youtubeId: string;
}
