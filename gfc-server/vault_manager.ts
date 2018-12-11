import { Vault } from '../gfc-gui/src/app/vault';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

export class VaultManager {
  vault: Vault = null;

  create(vault: Vault): Vault {
    var result = null;
    if (!this.vault == null) {
        result = vault
        this.vault = result;
    }
    return result;
  }

  creditar(value: number): number {
      this.vault.add(value);
      return this.getValue();
  }

  debitar(value: number): number {
    this.vault.remove(value);
    return this.getValue();
  }

  getValue(): number {
    return this.vault.get();
  }
}