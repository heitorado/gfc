import { User } from '../gfc-gui/src/app/user';

export class UserRegister {
  users: User[] = [];

  create(user: User): User {
    var result = null;
    if (this.cpfNaoCadastrado(user.cpf)) {
      result = new User();
      result.copyFrom(user);
      this.users.push(result);
    }
    return result;
  }

  cpfNaoCadastrado(cpf: string): boolean {
     return !this.users.find(a => a.cpf == cpf);
  }

  update(user: User): User {
    var result: User = this.users.find(a => a.cpf == user.cpf);
    if (result) result.copyFrom(user);
    return result;
  }

  getUsers(): User[] {
    return this.users;
  }
}