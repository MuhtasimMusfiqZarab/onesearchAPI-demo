import { Injectable } from '@nestjs/common';

import { LinkedinRepository } from './linkedin.repository';
import { LinkedinType } from './linkedin.type';

import { InjectRepository } from '@nestjs/typeorm';

import { getConnection } from 'typeorm';

import Linkedin from './linkedin.entity';

@Injectable()
export class LinkedinService {
  constructor(
    @InjectRepository(LinkedinRepository)
    private linkedinRepository: LinkedinRepository,
  ) {}

  async addLinkedinLeads(id: any): Promise<any> {
    try {
      return await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Linkedin)
        .values({
          firstName: 'Timber',
          lastName: () => "CONCAT('S', 'A', 'W')",
        })
        .execute();
    } catch (error) {
      throw new Error(error);
    }
  }
}
