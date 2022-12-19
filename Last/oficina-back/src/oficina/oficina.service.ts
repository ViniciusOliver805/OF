import {
  Injectable, NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Oficina } from './entities/oficina.entity';

@Injectable()
export class OficinaService { //cria os metodos pro crud

  constructor(
    @InjectRepository(Oficina)
    private OficinaRepository: Repository<Oficina>,
  ) {}


  async findAll(): Promise<Oficina[]> { 
    try {
      return await this.OficinaRepository.find();
    } catch (err) {
      console.log('Oficina Não Encontrada, tente novamente!');
      return null;
    }
  }

  async findOne(id: number): Promise<Oficina> {

    const Oficina = this.OficinaRepository.createQueryBuilder('Oficina')
      .select(['Oficina.id', 'Oficina.nomeOficina'])
      .getOne();
    if (!Oficina) throw new NotFoundException('Oficina Não Encontrado, tente novamente!');

    return Oficina;

  }

 
  async findByNome(nomeDapeca: string): Promise<Oficina> {
    return await this.OficinaRepository.findOneBy({  nomeDapeca });
  }
 
  async remove(pecaId: number) {
    const result = await this.OficinaRepository.delete({ pecaId: pecaId });
    if (result.affected === 0) {
      throw new NotFoundException(
        'ID incorreto, tente outro!',
      );
    }

  }

}
