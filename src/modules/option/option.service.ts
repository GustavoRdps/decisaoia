import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase } from './use-cases';
import { ListOptionRepositoryUseCase } from './use-cases/list-option.use-case';
import { FindOneOptionUseCase } from './use-cases/find-one-option.use-case';
import { UpdateOptionUseCase } from './use-cases/update-option.use-case';
import { RemoveOptionUseCase } from './use-cases/remove-option.use-case';

@Injectable()
export class OptionService {
  constructor(
    private readonly createOptionUseCase: CreateOptionUseCase,
    private readonly listAllUseCase: ListOptionRepositoryUseCase,
    private readonly findOneUseCase: FindOneOptionUseCase,
    private readonly updateUseCase: UpdateOptionUseCase,
    private readonly removeUseCase: RemoveOptionUseCase
  ) {}

  create(createOptionDto: CreateOptionDto) {
    return this.createOptionUseCase.execute(createOptionDto);
  }

  findAll() {
    return this.listAllUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneUseCase.execute(id);
  }

  update(id: string, updateOptionDto: UpdateOptionDto) {
    return this.updateUseCase.execute(id, updateOptionDto);
  }

  remove(id: string) {
    return this.removeUseCase.execute(id);
  }
}
