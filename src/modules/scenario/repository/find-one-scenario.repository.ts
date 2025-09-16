import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class FindOneScenarioRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getOne(id: string){
        const scenario = await this.prisma.scenario.findUnique({ where: { id: id }});
        return scenario;
    }
}