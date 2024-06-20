import { Injectable } from "@nestjs/common";

@Injectable()
export class ManufacturerPortalService {
  constructor() {}
  async ManageProduction(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
