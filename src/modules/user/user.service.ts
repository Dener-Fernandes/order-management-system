import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {}

  async findAll() {}
}
