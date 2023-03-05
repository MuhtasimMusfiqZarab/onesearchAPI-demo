import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { RequestService } from './request.service';
import {
  RequestType,
  RequestsType,
  RequestCategoriesType,
  RequestCountriesType,
  RequestPlatformsType,
  RequestStatusType,
} from './request.type';

import { AuthGuard, AdminGuard } from 'src/shared/guards/user.guard';
import { UseGuards } from '@nestjs/common';
import { GetRequestInput, AddRequestInput } from './request.input';

@Resolver()
export class RequestResolver {
  constructor(private readonly requestService: RequestService) {}

  //add new lead
  @Mutation(() => RequestType)
  @UseGuards(AdminGuard)
  async addRequest(
    @Args('input', { type: () => [AddRequestInput], nullable: false })
    input: AddRequestInput[],
  ): Promise<RequestType> {
    return this.requestService.addRequest(input);
  }

  //get specific user
  @UseGuards(AuthGuard)
  @Query(() => RequestType, { nullable: true })
  async getRequest(
    @Args('id', { type: () => String }) id: string,
  ): Promise<RequestType | null> {
    const channel = await this.requestService.getRequestById(id);
    if (!channel) {
      throw new NotFoundException(id);
    }
    return null;
  }
  // //get all channels
  @UseGuards(AuthGuard)
  @Query(() => RequestsType, { nullable: true })
  async getAllRequests(
    @Args('data') data: GetRequestInput,
  ): Promise<RequestsType | null> {
    return await this.requestService.getAllRequests(data);
  }

  @UseGuards(AuthGuard)
  @Query(() => RequestCategoriesType, { nullable: true })
  async getRequestCategories(): Promise<RequestCategoriesType | null> {
    return await this.requestService.getRequestCategories();
  }
  @UseGuards(AuthGuard)
  @Query(() => RequestCountriesType, { nullable: true })
  async getRequestCountries(): Promise<RequestCountriesType | null> {
    return await this.requestService.getRequestCountries();
  }

  @UseGuards(AuthGuard)
  @Query(() => RequestPlatformsType, { nullable: true })
  async getRequestPlatforms(): Promise<RequestPlatformsType | null> {
    return await this.requestService.getRequestPlatforms();
  }

  @UseGuards(AuthGuard)
  @Query(() => RequestStatusType, { nullable: true })
  async getRequestStatuses(): Promise<RequestStatusType | null> {
    return await this.requestService.getRequestStatuses();
  }
}
