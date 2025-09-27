import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Atleta } from "src/atleta/entities/atleta.entity";

@Entity()
export class Ciudad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre:string;
    
    @OneToMany(() => Atleta, (atleta) => atleta.ciudad)
    atletas: Atleta[];
}
