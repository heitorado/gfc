import { Vault } from '../gfc-gui/src/app/vault';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

export class VaultManager {
  vault: Vault = new Vault();

  create(vault: Vault): Vault {
    var result = null;
    if (!this.vault == null) {
        result = vault
        this.vault = result;
    }
    return result;
  }

  atualizar(vault: Vault): Vault {
    var result = null;
    if (!this.vault == null) {
        result = vault
        this.vault = result;
    }
    return result;
  }

  creditar(value: number): number {
      this.vault.addValue(value);
      return this.getValue();
  }

  debitar(value: number): number {
    this.vault.removeValue(value);
    return this.getValue();
  }

  getValue(): number {
    return this.vault.get();
  }
}