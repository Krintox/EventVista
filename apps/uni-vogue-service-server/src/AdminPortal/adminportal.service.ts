import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminPortalService {
  constructor() {}
  async ManageOrders(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ManageUsers(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async PlatformSettings(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
