# CRUD boilerplate - TypeScript - NestJs + MongoDB

Boilerplate de CRUD em TypeScript.<br><br> Construído com o framework de desenvolvimento back-end - [NestJs](https://github.com/nestjs/nest/) conectado ao
[MondoDB](https://github.com/mongodb/mongo) do MongoLab.

## Instalação

Usando a linha comando do OS - Windows - Mac - Linux

Clone este repositório:
```js
git clone https://github.com/eduardokeneth/CRUD-typescript-nestjs-mongodb.git
```

Execute um npm/yarn install para instalar as dependências do package.json
```js
yarn install
```

Rode npm/yarn run start:dev para rodar a aplicação
```js
yarn run start:dev
```

### Substituir as chaves do MongoLab

```typescript
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

```

```typescript
  MongooseModule.forRoot('mongodb://<nomedeusuario>:<senha>@ds113853.mlab.com:13853/crud-project'),
```

### Controllers com injeção de dependência

```typescript
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
```

## Compatibilidade
Versões iguais ou superiores

Nodejs : v10.13.0 &nbsp;&nbsp;/&nbsp;&nbsp; NPM : 6.5.0
NestJs : ^5.4.0 &nbsp;&nbsp;/&nbsp;&nbsp; Mongoose : ^5.4.0 &nbsp;&nbsp;/&nbsp;&nbsp;

License
--------

[MIT License](https://github.com/eduardokeneth/CRUD-typescript-nestjs-mongodb/blob/master/LICENSE.md) © Eduardo Keneth
