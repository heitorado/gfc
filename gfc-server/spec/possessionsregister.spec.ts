import { PossessionsRegister } from '../possessions_register';
import { Possession } from '../../gfc-gui/src/app/possession';

describe("The possessions register", () => {
  var reg: PossessionsRegister;

  beforeEach(() => reg = new PossessionsRegister())

  it("starts empty", () => {
    expect(reg.getPossessions().length).toBe(0);
  })

  it("register new possessions correctly", () => {
    var posse: Possession = newPossession("Frying Pan", 50);
    reg.create(posse);

    expect(reg.getPossessions().length).toBe(1);

    posse = reg.getPossessions()[0];
    
    expect(posse.nome).toBe("Frying Pan");
    expect(posse.preco).toBe(50);
  })

  it("does not accept possesions with same name", () => {
    var posse: Possession = newPossession("Frying Pan", 50);
    reg.create(posse);

    posse = newPossession("Frying Pan", 99);
    reg.create(posse);

    expect(reg.getPossessions().length).toBe(1);
  })

  it("deletes possessions correctly given its name and does not affect others", () => {
    var posse: Possession = newPossession("Cups", 20);
    reg.create(posse);

    posse = newPossession("Knife", 10);
    reg.create(posse);

    posse = reg.delete("Knife");

    expect(posse.nome).toBe("Knife");
    expect(posse.preco).toBe(10);
    expect(reg.getPossessions().length).toBe(1);
    expect(reg.getPossessions()[0].nome).toBe("Cups");
    expect(reg.getPossessions()[0].preco).toBe(20);
  })

  it("sets the ID of new possessions accordingly", () => {
    // Create new possession and check if id is 1
    var posse: Possession = newPossession("Frying Pan", 50);
    reg.create(posse);

    posse = reg.getPossessions()[reg.getPossessions().length-1];
    expect(posse.id).toBe(1);

    // Create new possession and check if id is 2
    posse = newPossession("Toaster", 100);
    reg.create(posse);

    posse = reg.getPossessions()[reg.getPossessions().length-1];
    expect(posse.id).toBe(2);

    // Create new possession and check if id is 3
    posse = newPossession("Fridge", 1800);
    reg.create(posse);

    posse = reg.getPossessions()[reg.getPossessions().length-1];
    expect(posse.id).toBe(3);

    // Delete possession of id 2, create another and check if id is 4
    reg.delete("Toaster");

    posse = newPossession("Microwave", 800);
    reg.create(posse);

    posse = reg.getPossessions()[reg.getPossessions().length-1];
    expect(posse.id).toBe(4);

    // Delete possession of id 4, create another and check if id is 4 (again)
    reg.delete("Microwave");

    posse = newPossession("Chair", 80);
    reg.create(posse);

    posse = reg.getPossessions()[reg.getPossessions().length-1];
    expect(posse.id).toBe(4);

  })

  function newPossession(name : string, price : number) : Possession{
    var p : Possession = new Possession();
    p.nome = name;
    p.preco = price;
    return p;
  }

})