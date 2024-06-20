import * as graphql from "@nestjs/graphql";
import { AdminPortalService } from "./adminportal.service";

export class AdminPortalResolver {
  constructor(protected readonly service: AdminPortalService) {}

  @graphql.Query(() => String)
  async ManageOrders(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ManageOrders(args);
  }

  @graphql.Query(() => String)
  async ManageUsers(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ManageUsers(args);
  }

  @graphql.Query(() => String)
  async PlatformSettings(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PlatformSettings(args);
  }
}
