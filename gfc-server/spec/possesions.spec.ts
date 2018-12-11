import { Possession } from '../../gfc-gui/src/app/possession';

describe("The possessions class", () => {

  it("initializes instances with empty values", () => {
      var posse : Possession = new Possession();

      expect(posse.nome).toBe("");
      expect(posse.preco).toBe(0.0);
      expect(posse.owned).toBe(false);
  })

  it("duplicates new possessions correctly", () => {
    var posse: Possession = new Possession;
    
    posse.nome = "Toaster";
    posse.preco = 68.34

    var clonedPosse = posse.clone()

    expect(clonedPosse.nome).toBe("Toaster");
    expect(clonedPosse.preco).toBe(68.34);
    expect(clonedPosse.owned).toBe(false);
  })
})