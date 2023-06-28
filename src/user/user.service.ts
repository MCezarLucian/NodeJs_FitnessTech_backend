import { Injectable } from '@nestjs/common';
import { UserRepository } from './user_repository';
import { User } from './user.model';
import { UserDTO } from './userDTO';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  createUser(userDTO: UserDTO): Promise<User> {
    return this.userRepository.createUser(userDTO);
  }

  deleteUser(username: string): Promise<User> {
    return this.userRepository.deleteUser(username);
  }

  deleteUserByEmail(email: string): Promise<User> {
    return this.userRepository.deleteUserByEmail(email);
  }

  findUserByEmail(email: string): Promise<User> {
    return this.userRepository.findUserByEmail(email);
  }

  findUserByUsername(username: string): Promise<User> {
    return this.userRepository.findUserByUsername(username);
  }

  updateUser(username: string, user: UserDTO) {
    return this.userRepository.updateUser(username, user);
  }

  updateUserPassword(username: string, user: UserDTO) {
    return this.userRepository.updateUser(username, user);
  }

  confirmUser(id: string, user: UserDTO): Promise<User> {
    return this.userRepository.confirmUser(id, user);
  }
}
