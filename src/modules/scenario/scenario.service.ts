import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase } from './use-cases';
import { ListScenarioRepositoryUseCase } from './use-cases/list-scenario.use-case';
import { FindOneScenarioUseCase } from './use-cases/find-one-scenario.use-case';
import { UpdateScenarioUseCase } from './use-cases/update-scenario.use-case';
import { RemoveScenarioUseCase } from './use-cases/remove-scenario.use-case';

@Injectable()
export class ScenarioService {
  constructor(
    private readonly createScenarioUseCase: CreateScenarioUseCase,
    private readonly listAllUseCase: ListScenarioRepositoryUseCase,
    private readonly findOneUseCase: FindOneScenarioUseCase,
    private readonly updateUseCase: UpdateScenarioUseCase,
    private readonly removeUseCase: RemoveScenarioUseCase
  ) {}

  create(createScenarioDto: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(createScenarioDto);
  }

  findAll() {
    return this.listAllUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneUseCase.execute(id);
  }

  update(id: string, updateScenarioDto: UpdateScenarioDto) {
    return this.updateUseCase.execute(id, updateScenarioDto);
  }

  remove(id: string) {
    return this.removeUseCase.execute(id);
  }
}
