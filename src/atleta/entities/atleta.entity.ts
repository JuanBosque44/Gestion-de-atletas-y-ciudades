
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Ciudad } from 'src/ciudad/entities/ciudad.entity';

@Entity()
@Unique(['dni'])
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

    @ManyToOne(() => Ciudad, (ciudad) => ciudad.atletas, { eager: true })
    @JoinColumn({ name: 'ciudadId' }) 
    ciudad: Ciudad;

    @Column()
    ciudadId: number; 


}

