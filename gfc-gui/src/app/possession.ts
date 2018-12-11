export class Possession {
    id: number;
    nome: string;
    preco: number;
    completion: number;
    owned: boolean;
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.nome = "";
      this.preco = 0.0;
      this.owned = false;
    }
  
    clone(): Possession {
      var item: Possession = new Possession();
      item.copyFrom(this);
      return item;
    }
  
    copyFrom(from: Possession): void {
      this.nome = from.nome;
      this.preco = from.preco;
      this.owned = false;
    }
  }