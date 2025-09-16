import { Injectable, Logger } from "@nestjs/common";
import { ListScenarioRepository } from "../repository";

@Injectable()
export class ListScenarioRepositoryUseCase {
    constructor(private readonly scenarioRepository: ListScenarioRepository, private readonly logger: Logger) {}

    async execute() {
        try {
            const scenario = await this.scenarioRepository.list();
            return scenario;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}