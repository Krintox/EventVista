import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoreServiceBase } from "./base/store.service.base";

@Injectable()
export class StoreService extends StoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
