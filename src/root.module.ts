import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { appController } from './app.controller';



@Module({
  imports: [UsersModule],
  controllers: [appController],
  providers: [],
  exports: [],
})
export class Root {
  constructor() {
    console.log('App launched successfully !');
  }
}
