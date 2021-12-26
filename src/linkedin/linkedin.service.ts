import { Injectable } from '@nestjs/common';
import { LinkedinRepository } from './linkedin.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LinkedinService {
  constructor(
    @InjectRepository(LinkedinRepository)
    private linkedinRepository: LinkedinRepository,
  ) {}

  async addLinkedinLeads(input: any): Promise<any> {
    try {
      return await this.linkedinRepository.save(input);
    } catch (error) {
      throw new Error(error);
    }
  }
}
