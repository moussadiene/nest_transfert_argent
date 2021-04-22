import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'djine',
      password: 'mosila21',
      database: 'nest_transfert_argent',
      // autoLoadEntities : true,
      entities: [User],
      synchronize: true,
    }),
    UsersModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

