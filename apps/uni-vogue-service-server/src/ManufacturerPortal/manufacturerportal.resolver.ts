import * as graphql from "@nestjs/graphql";
import { ManufacturerPortalService } from "./manufacturerportal.service";

export class ManufacturerPortalResolver {
  constructor(protected readonly service: ManufacturerPortalService) {}

  @graphql.Query(() => String)
  async ManageProduction(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ManageProduction(args);
  }
}
