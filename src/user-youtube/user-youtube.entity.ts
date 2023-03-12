import { Entity, PrimaryColumn } from 'typeorm';

@Entity('user_youtube')
export default class User_Youtube {
  @PrimaryColumn({ type: 'varchar' })
  userId: string;

  @PrimaryColumn({ type: 'varchar' })
  youtubeId: string;
}
