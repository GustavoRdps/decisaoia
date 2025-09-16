import { Injectable, Logger } from "@nestjs/common";
import { CreateScenarioRepository } from "../../scenario/repository/create-scenario.repository";
import { CreateScenarioDto } from "../../scenario/dto/create-scenario.dto";

@Injectable()
export class CreateScenarioUseCase {
    constructor(private readonly scenarioRepository: CreateScenarioRepository, private readonly logger: Logger) {}

    async execute(data: CreateScenarioDto) {
        try {
            const scenario = await this.scenarioRepository.create(data);
            return scenario;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}