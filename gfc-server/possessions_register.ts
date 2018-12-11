import { Possession } from '../gfc-gui/src/app/possession';

export class PossessionsRegister {
  possessions: Possession[] = [];

  create(item: Possession): Possession {
    var result = new Possession();
    result.copyFrom(item);
    result = this.setId(result);
    this.possessions.push(result);
    return result;
  }

  update(item: Possession): Possession {
    var result: Possession = this.possessions.find(a => a.nome == item.nome);
    if (result) result.copyFrom(item);
    return result;
  }

  delete(nome: string) : Possession {
    var result: Possession = this.possessions.find(a => a.nome == nome);

    if(result){
      this.possessions.splice( this.possessions.indexOf(result), 1 );
    }

    return result;
  }

  getPossessions(): Possession[] {
    return this.possessions;
  }

  setId(item: Possession): Possession{
    var len = this.possessions.length

    if(len === 0){
      item.id = 1;
    } else {
      item.id = this.possessions[len-1].id + 1;
    }
    return item
  }
}