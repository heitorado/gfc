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
    
    copyFrom(from: Bills): Bills {
      var actual:Bills = new Bills();
        actual.nome = from.nome;
        actual.valor = from.valor;
        actual.vencimento = from.vencimento;
        actual.status = from.status;
        actual.id = from.id;
        return actual;
      }
  
  }