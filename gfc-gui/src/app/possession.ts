export class Possession {
    nome: string;
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.nome = "";
    }
  
    clone(): Possession {
      var item: Possession = new Possession();
      item.copyFrom(this);
      return item;
    }
  
    copyFrom(from: Possession): void {
      this.nome = from.nome;
    }
  }