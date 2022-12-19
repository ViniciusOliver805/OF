import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OficinaController } from './oficina.controller';
import { OficinaService } from './oficina.service';
import { Oficina } from './entities/oficina.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Oficina]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [OficinaController],
  providers: [OficinaService],
})
export class OficinaModule {}
