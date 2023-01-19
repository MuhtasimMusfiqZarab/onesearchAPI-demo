import { Repository, EntityRepository } from 'typeorm';
import Request from './request.entity';

@EntityRepository(Request)
export class YoutubeRepository extends Repository<Request> {}
