export class User {
    nome: string;
    cpf: string;
    email: string;
    monthlyExpenses: number;
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.nome = "";
      this.cpf = "";
      this.email = "";
      this.monthlyExpenses = 0.0;
    }
  
    clone(): User {
      var user: User = new User();
      user.copyFrom(this);
      return user;
    }
  
    copyFrom(from: User): void {
      this.nome = from.nome;
      this.cpf = from.cpf;
      this.email = from.email;
      this.monthlyExpenses = from.monthlyExpenses;
    }
  }