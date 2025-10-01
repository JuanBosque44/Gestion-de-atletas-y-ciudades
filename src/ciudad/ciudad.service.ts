import { Injectable } from '@nestjs/common';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';

@Injectable()
export class CiudadService {
  constructor(
    @InjectRepository(Ciudad)
    private ciudadRepository: Repository<Ciudad>,
  ) {}

  create(createCiudadDto: CreateCiudadDto) {
    const ciudad = this.ciudadRepository.create(createCiudadDto);
    return this.ciudadRepository.save(ciudad);
  }

  async findAll() {
    return this.ciudadRepository.find();
  }

  findOne(id: number) {
    return this.ciudadRepository.findOneBy({id});
  }

  async update(id: number, updateCiudadDto: UpdateCiudadDto) {
    await this.ciudadRepository.update(id, updateCiudadDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.ciudadRepository.delete(id);
  }
}
