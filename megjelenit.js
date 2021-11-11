class Megjelenit {
  constructor(elem, adat,index) {
    this.elem = elem;
    this.adat = adat;
    this.adat.index = index;
    console.log(this.elem);
    console.log(this.kep);

    this.kepelem = elem.children("img"); 
    this.cimelem = elem.children("h3"); 
    this.leiraselem = elem.children("p");
    this.setAdatok(this.adat);
    this.elem.on("click",()=>{
        this.kattintasTrigger();
    });
    
  
  }
  setAdatok(ertekek){
    this.kepelem.attr("src", ertekek.kep);
    this.cimelem.html(ertekek.cim);
    this.leiraselem.html(ertekek.leiras);
    
  }

  kattintasTrigger() {
    let esemeny = new CustomEvent("kepValasztas",{detail:this.adat});
    window.dispatchEvent(esemeny);
    console.log("valami");
  }
}
