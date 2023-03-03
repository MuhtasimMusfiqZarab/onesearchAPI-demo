import { Injectable, NotFoundException } from '@nestjs/common';
import { GoogleRepository } from './google.repository';
import { InjectRepository } from '@nestjs/typeorm';

import { GoogleBasicType } from './google.type';

import { BulkGoogleInput, GetGoogleInput } from './google.input';

@Injectable()
export class GoogleService {
  constructor(
    @InjectRepository(GoogleRepository)
    private googleRepository: GoogleRepository,
  ) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async addGoogleLeads(input: BulkGoogleInput[]): Promise<GoogleBasicType[]> {
    try {
      return await this.googleRepository.save(input);
    } catch (error) {
      throw new Error(error);
    }
  }
}
