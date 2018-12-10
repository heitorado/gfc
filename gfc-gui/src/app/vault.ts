export class Vault {
    balance: number;

    constructor() {
        this.clean();
    }

    clean(): void {
        this.balance = 0.0;
    }

    add(value: number): void {
        this.balance += value;
    }

    remove(value: number): void {
        this.balance -= value;
    }

    get(): number {
        return this.balance;
    }
}