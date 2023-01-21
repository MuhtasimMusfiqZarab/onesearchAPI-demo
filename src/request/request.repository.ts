import { Repository, EntityRepository } from 'typeorm';
import Request from './request.entity';

@EntityRepository(Request)
export class RequestRepository extends Repository<Request> {}
