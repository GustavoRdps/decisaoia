import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class RemoveScenarioRepository {
    constructor(private readonly prisma: PrismaService) {}

    async remove(id: string){
        const scenario = await this.prisma.scenario.delete({ where: { id: id } });
        return scenario;
    }
}