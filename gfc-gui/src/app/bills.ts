export class Bills {
    nome: string;
    valor: number;
    vencimento: string;
    status: boolean;
    id: number;
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.nome = "";
      this.valor = 0;
      this.vencimento = "";
      this.status = false;
    }
    clone(): Bills {
      var bill: Bills = new Bills();
      bill.copyFrom(this);
      return bill;
    }
    
    copyFrom(from: Bills): void {
        this.nome = from.nome;
        this.valor = from.valor;
        this.vencimento = from.vencimento;
        this.status = from.status;
      }
  
  }