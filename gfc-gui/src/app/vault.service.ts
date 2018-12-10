import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/toPromise';

import { Vault } from './vault';

@Injectable()
export class VaultService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private gfcURL = 'http://localhost:8000';

  vault: Vault;
  constructor(private http: Http) { }

  criar(vault: Vault): Promise<Vault> {
    return this.http.post(this.gfcURL + "/vault/operate",JSON.stringify(vault), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return vault;} else {return null;}
           })
           .catch(this.tratarErro);
  }

  atualizar(vault: Vault): Promise<Vault> {
    return this.http.post(this.gfcURL + "/vault/operate",JSON.stringify(vault), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {return vault;} else {return null;}
         })
         .catch(this.tratarErro);
  }

  getVault(): Promise<Vault> {
    return this.http.get(this.gfcURL + "/vault")
             .toPromise()
             .then(res => res.json() as Vault)
             .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Bad request to the vault service',erro);
    return Promise.reject(erro.message || erro);
  }
}