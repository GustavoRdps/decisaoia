import { Injectable, Logger } from "@nestjs/common";
import { UpdateOptionRepository } from "../repository";
import { UpdateOptionDto } from "../dto/update-option.dto";

@Injectable()
export class UpdateOptionUseCase {
    constructor(private readonly updateOptionRepository: UpdateOptionRepository, private readonly logger: Logger) {}

    async execute(id: string, dto: UpdateOptionDto){
        try {
            const option = await this.updateOptionRepository.update(id, dto);
            return option;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}