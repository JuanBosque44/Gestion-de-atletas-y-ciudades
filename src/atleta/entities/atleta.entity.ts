
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ciudad } from 'src/ciudad/entities/ciudad.entity';

@Entity()
export class Atleta {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    dni: number;

    @Column()
    nombre: string;

    @Column()
    tiempo: string;

    @Column()
    posicion: number;

/*     @OneToMany(() => Ciudad, (nombre) => Ciudad.nombre)
 */    ciudadId:number;

}

