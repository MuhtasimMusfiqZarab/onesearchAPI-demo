import { Repository, EntityRepository } from 'typeorm';
import Linkedin from './linkedin.entity';

@EntityRepository(Linkedin)
export class LinkedinRepository extends Repository<Linkedin> {}
