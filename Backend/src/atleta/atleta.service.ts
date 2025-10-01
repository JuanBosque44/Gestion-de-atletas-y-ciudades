import { Injectable } from '@nestjs/common';
import { CreateAtletaDto } from './dto/create-atleta.dto';
import { UpdateAtletaDto } from './dto/update-atleta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atleta } from './entities/atleta.entity';

@Injectable()
export class AtletaService {
  constructor(
      @InjectRepository(Atleta)
      private atletaRepository: Repository<Atleta>,
    ) {}

  create(createAtletaDto: CreateAtletaDto) {
    const atleta = this.atletaRepository.create(createAtletaDto);
    return this.atletaRepository.save(atleta);
  }

  async findAll() {
  return this.atletaRepository.find(); 
}

  findOne(id: number) {
    return this.atletaRepository.findOneBy({id});
  }

  update(id: number, updateAtletaDto: UpdateAtletaDto) {
    return this.atletaRepository.update(id, updateAtletaDto);
  }

  remove(id: number) {
    return this.atletaRepository.delete(id);
  }
}
