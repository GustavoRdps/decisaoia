import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateScenarioDto } from "../../scenario/dto/create-scenario.dto";

@Injectable()
export class CreateScenarioRepository {
    constructor(private readonly prisma : PrismaService) {}

    async create(data: CreateScenarioDto) {
        const scenario = await this.prisma.scenario.create({data});
        return scenario;
    }
}   