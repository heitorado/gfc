import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { Bills } from './bills';
@Injectable()
export class BillsService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private gfcURL = 'http://localhost:8000';
  constructor(private http: Http) { }
  criar(bill: Bills): Promise<Bills> {
    return this.http.post(this.gfcURL + "/bill",JSON.stringify(bill), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return bill;} else {return null;}
           })
           .catch(this.tratarErro);
  }
  atualizar(bill: Bills): Promise<Bills> {
    return this.http.put(this.gfcURL + "/bill",JSON.stringify(bill), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {return bill;} else {return null;}
         })
         .catch(this.tratarErro);
  }
  getBills(): Promise<Bills[]> {
    return this.http.get(this.gfcURL + "/bills")
             .toPromise()
             .then(res => res.json() as Bills[])
             .catch(this.tratarErro);
  }
  private tratarErro(erro: any): Promise<any>{
    console.error('Bad request to the bills service',erro);
    return Promise.reject(erro.message || erro);
  }
}