import { Module } from '@nestjs/common';
import { ItemsController } from './controllers/items.controller';
import { ItemService } from './services/item.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './schemas/item.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  controllers: [ItemsController],
  providers: [ItemService],
})

export class ItemsModule {}
