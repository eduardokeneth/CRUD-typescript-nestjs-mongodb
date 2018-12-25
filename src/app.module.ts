import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot('mongodb://<nomedeusuario>:<senha>@ds113853.mlab.com:13853/crud-project'),
  ],
})
export class AppModule {}
