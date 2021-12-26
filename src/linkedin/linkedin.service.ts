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

  async addLinkedinLeads(input: any): Promise<any> {
    try {
      const response = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Linkedin)
        .values(input)
        .execute();

      console.log('This is the resposne', response);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
