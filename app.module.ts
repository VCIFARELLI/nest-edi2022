import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProgramasService } from './programas/programas.service';
import { ProgramasController } from './programas/programas.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, ProgramasController],
  providers: [AppService, ProductsService, ProgramasService],
})
export class AppModule {}
