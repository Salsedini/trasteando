import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PassportStrategy } from "@nestjs/passport";


@Module({
  controllers: [UserController],
})
export class UserModule {}
