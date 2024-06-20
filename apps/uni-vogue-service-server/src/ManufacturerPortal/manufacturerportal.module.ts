import { Module } from "@nestjs/common";
import { ManufacturerPortalService } from "./manufacturerportal.service";
import { ManufacturerPortalController } from "./manufacturerportal.controller";
import { ManufacturerPortalResolver } from "./manufacturerportal.resolver";

@Module({
  controllers: [ManufacturerPortalController],
  providers: [ManufacturerPortalService, ManufacturerPortalResolver],
  exports: [ManufacturerPortalService],
})
export class ManufacturerPortalModule {}
