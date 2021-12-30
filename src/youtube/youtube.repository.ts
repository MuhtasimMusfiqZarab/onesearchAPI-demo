import { Repository, EntityRepository } from 'typeorm';
import Youtube from './youtube.entity';

@EntityRepository(Youtube)
export class YoutubeRepository extends Repository<Youtube> {}
