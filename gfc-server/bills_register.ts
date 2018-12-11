import { Bills } from '../gfc-gui/src/app/bills';

export class BillsRegister {
  bills: Bills[] = [];

  create(bill: Bills): Bills {
    var result: Bills = null;
    result = new Bills();
    result = result.copyFrom(bill);
    result = this.setId(bill);
    this.bills.push(result);
    return result;
  }

  update(bill: Bills): Bills {
    var result: Bills = null;
    result = new Bills();
    result = <Bills> this.bills.find(a => a.nome === bill.nome);
    if (result){
      var aux: Bills = new Bills();
      aux = result.copyFrom(bill);
      result = aux;
    }
    return result;
  }

  setId(bill: Bills):Bills{
    bill.id = this.bills.length+1;
    return bill;
  }

  getBills(): Bills[] {
    return this.bills;
  }
}