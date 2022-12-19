
import { createParamDecorator } from '@nestjs/common';
import { Oficina } from 'src/oficina/entities/oficina.entity';
export const GetOficina = createParamDecorator(
  (data, req): Oficina => {
    const Oficina = req.args[0].Oficina;
    return Oficina;
  },
);
