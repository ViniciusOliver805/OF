import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  // UseGuards,
  ValidationPipe
} from '@nestjs/common';
import { OficinaService } from './oficina.service';


@Controller('oficina')
export class OficinaController {
  constructor(private readonly OficinaService: OficinaService) {}

 /* @Post()
  create(@Body() createUserDto: CreateOficinaDto) {
    return this.OficinaService.create(createUserDto);
  }*/

  @Get()
  findAll() {
    return this.OficinaService.findAll();
  }

  @Get('/list/:id')
  findOne(@Param('id') id: number) {
    return this.OficinaService.findOne(id);
  }



  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.OficinaService.remove(id);
    return {
      message: ' removido com sucesso',
    };
  }
}
