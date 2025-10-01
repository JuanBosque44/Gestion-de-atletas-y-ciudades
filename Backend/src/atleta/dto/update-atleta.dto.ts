import { PartialType } from '@nestjs/mapped-types';
import { CreateAtletaDto } from './create-atleta.dto';

export class UpdateAtletaDto extends PartialType(CreateAtletaDto) {
    dni?: number;
    nombre?: string;
    tiempo?: string;
    posicion?: number;
    ciudadId?: number;
}
