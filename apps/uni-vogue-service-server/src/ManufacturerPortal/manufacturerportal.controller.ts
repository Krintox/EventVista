import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ManufacturerPortalService } from "./manufacturerportal.service";

@swagger.ApiTags("manufacturerPortals")
@common.Controller("manufacturerPortals")
export class ManufacturerPortalController {
  constructor(protected readonly service: ManufacturerPortalService) {}

  @common.Get("/:id/manage-production")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ManageProduction(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ManageProduction(body);
      }
}
