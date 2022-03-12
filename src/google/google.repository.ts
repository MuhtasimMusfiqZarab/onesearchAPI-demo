import { Repository, EntityRepository } from 'typeorm';
import Google from './google.entity';

@EntityRepository(Google)
export class GoogleRepository extends Repository<Google> {}
