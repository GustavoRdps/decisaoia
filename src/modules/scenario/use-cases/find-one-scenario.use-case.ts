import { Injectable, Logger } from "@nestjs/common";
import { FindOneScenarioRepository } from "../repository";

@Injectable()
export class FindOneScenarioUseCase {
    constructor(private readonly findOneScenarioRepository: FindOneScenarioRepository, private readonly logger: Logger) {}

    async execute(id: string){
        try {
            const scenario = await this.findOneScenarioRepository.getOne(id);
            return scenario;
        } catch(error){
            this.logger.error(error);
            throw error;
        }
    }
}