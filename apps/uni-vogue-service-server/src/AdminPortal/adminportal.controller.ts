import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminPortalService } from "./adminportal.service";

@swagger.ApiTags("adminPortals")
@common.Controller("adminPortals")
export class AdminPortalController {
  constructor(protected readonly service: AdminPortalService) {}

  @common.Get("/:id/manage-orders")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ManageOrders(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ManageOrders(body);
      }

  @common.Get("/:id/manage-users")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ManageUsers(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ManageUsers(body);
      }

  @common.Get("/:id/platform-settings")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PlatformSettings(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.PlatformSettings(body);
      }
}
