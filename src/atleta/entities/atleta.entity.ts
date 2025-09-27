
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

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

    @OneToMany()
    ciudadId:number;

}

