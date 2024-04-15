import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';



@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
  exports: []
})
export class Root {
  constructor(){
    console.log("App launched successfully !");
  }
}
