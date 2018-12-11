export class Vault {
    balance: number;

    constructor() {
        this.clean();
    }

    clean(): void {
        this.balance = 0.0;
    }

    addValue(value: number): void {
        this.balance += value;
    }

    removeValue(value: number): void {
        this.balance -= value;
    }

    get(): number {
        return this.balance;
    }
}