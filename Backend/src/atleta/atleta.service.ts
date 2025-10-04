import { Injectable } from '@nestjs/common';
import { CreateAtletaDto } from './dto/create-atleta.dto';
import { UpdateAtletaDto } from './dto/update-atleta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atleta } from './entities/atleta.entity';
import { Ciudad } from '../ciudad/entities/ciudad.entity';

@Injectable()
export class AtletaService {
  constructor(
      @InjectRepository(Atleta)
      private atletaRepository: Repository<Atleta>,
    ) {}

  create(dto: CreateAtletaDto) {
    const atleta = new Atleta();
    atleta.dni = dto.dni;
    atleta.nombre = dto.nombre;
    atleta.posicion = dto.posicion;
    atleta.tiempo = dto.tiempo;
    atleta.ciudad = { id: dto.ciudadId } as Ciudad;
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
