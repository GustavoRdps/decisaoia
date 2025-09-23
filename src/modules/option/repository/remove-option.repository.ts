import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class RemoveOptionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async remove(id: string){
        const option = await this.prisma.option.delete({ where: { id: id } });
        return option;
    }
}