import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateScenarioDto } from "../dto/update-scenario.dto";

@Injectable()
export class UpdateScenarioRepository {
    constructor(private readonly prisma: PrismaService) {}

    async update(id: string, dto: UpdateScenarioDto){
        const scenario = await this.prisma.scenario.update({ where: { id: id }, data: dto });
        return scenario;
    }
}