export class VaultStub {
    private value: number;
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.value = 0.0;
    }

    deposit(quantity: number): number{
        this.value += quantity;
        return this.value;
    }

    withdraw(quantity: number): number{
        this.value -= quantity;
        return this.value;
    }

    balance(): number{
        return this.value;
    }
  }