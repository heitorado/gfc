import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/toPromise';

import { Possession } from './possession';

@Injectable()
export class PossessionsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private gfcURL = 'http://localhost:8000';

  constructor(private http: Http) { }

  getPossessions(): Promise<Possession[]> {
    return this.http.get(this.gfcURL + "/possessions")
             .toPromise()
             .then(res => res.json() as Possession[])
             .catch(this.tratarErro);
  }

  createPossession(pos: Possession): Promise<Possession> {
    return this.http.post(this.gfcURL + "/possession", JSON.stringify(pos), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return pos;} else {return null;}
           })
           .catch(this.tratarErro);
  }

  updatePossession(pos: Possession): Promise<Possession>{
    return this.http.put(this.gfcURL + "/possession", JSON.stringify(pos), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return pos;} else {return null;}
           })
           .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Bad request to the possessions service',erro);
    return Promise.reject(erro.message || erro);
  }
}