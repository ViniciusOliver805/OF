import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OficinaModule } from './oficina/oficina.module';
import { Oficina } from './oficina/entities/oficina.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'oficinabase',
      entities: [Oficina],
      synchronize: true,
      logging: true,
    }),
    OficinaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
