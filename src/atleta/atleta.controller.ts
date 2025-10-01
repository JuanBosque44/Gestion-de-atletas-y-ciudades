import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AtletaService } from './atleta.service';
import { CreateAtletaDto } from './dto/create-atleta.dto';
import { UpdateAtletaDto } from './dto/update-atleta.dto';

@Controller('atleta')
export class AtletaController {
  constructor(private readonly atletaService: AtletaService) {}

  @Post()
  create(@Body() createAtletaDto: CreateAtletaDto) {
    return this.atletaService.create(createAtletaDto);
  }

  @Get()
  async findAll() {
  const atletas = await this.atletaService.findAll();

  return atletas.map((a) => ({
    nombre: a.nombre,
    tiempo: a.tiempo,
    posicion: a.posicion,
    ciudad: a.ciudad.nombre
    //dni: a.dni
  }));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atletaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAtletaDto: UpdateAtletaDto) {
    return this.atletaService.update(+id, updateAtletaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atletaService.remove(+id);
  }
}
