import { Repository, EntityRepository } from 'typeorm';
import UserYoutube from './user-youtube.entity';

@EntityRepository(UserYoutube)
export class UserYoutubeRepository extends Repository<UserYoutube> {}
