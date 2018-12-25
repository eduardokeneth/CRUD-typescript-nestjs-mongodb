import { Get, Controller, Put, Post, Body, Param, Delete } from '@nestjs/common';
import { ItemModel } from '../models/items.model';
import { ItemService } from '../services/item.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly service: ItemService) {

  }

  @Post()
  async create(@Body() model: ItemModel) {
    return await this.service.create(model);
  }

  @Get()
  async get(): Promise<ItemModel[]> {
    return await this.service.get();
  }

  @Put(':id')
  async update(@Param('id') id, @Body() model: ItemModel) {
    return await this.service.update(id, model);
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    return await this.service.remove(id);
  }
}
