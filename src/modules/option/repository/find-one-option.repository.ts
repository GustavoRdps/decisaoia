import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class FindOneOptionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getOne(id: string){
        const option = await this.prisma.option.findUnique({ where: { id: id }});
        return option;
    }
}