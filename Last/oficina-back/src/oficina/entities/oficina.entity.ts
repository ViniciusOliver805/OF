import {
  Column, Entity, PrimaryGeneratedColumn 
} from 'typeorm';

@Entity('tbl_oficina')
export class Oficina {

  @PrimaryGeneratedColumn('uuid') //classe que modela no banco, vai ser visivel no banco de dados, cada atributo uma coluna no banco
  pecaId: number;

  @Column()
  nomeDapeca: string;

  @Column()
  custoPeca: number;

  
  

}
