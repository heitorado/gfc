import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private gfcURL = 'http://localhost:8000';

  constructor(private http: Http) { }

  criar(user: User): Promise<User> {
    return this.http.post(this.gfcURL + "/user",JSON.stringify(user), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return user;} else {return null;}
           })
           .catch(this.tratarErro);
  }

  atualizar(user: User): Promise<User> {
    return this.http.put(this.gfcURL + "/user",JSON.stringify(user), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {return user;} else {return null;}
         })
         .catch(this.tratarErro);
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.gfcURL + "/users")
             .toPromise()
             .then(res => res.json() as User[])
             .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Bad request to the users service',erro);
    return Promise.reject(erro.message || erro);
  }
}