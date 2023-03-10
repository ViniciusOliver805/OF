import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { Oficina } from '../oficina/entities/oficina.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Oficina)
    private oficinaRepository: Repository<Oficina>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'super-secret',
    });
  }

  async validate(payload: { pecaId: number }) {
    const { pecaId } = payload;
    const Oficina = await this.oficinaRepository.findOneBy({ pecaId });
    if (!Oficina) {
      throw new UnauthorizedException('Tente Novamente!');
    }

    return Oficina;
  }
}
