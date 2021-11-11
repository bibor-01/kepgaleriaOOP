$(function () {
  const szuloElem = $("article");
  const sablonElem = $(".kepek");
  const kep = "kepek/4.jpg";

  const Obj = [
    { kep: "kepek/1.jpg", cim: "1 kép", leiras: "1 kép leírás" },

    { kep: "kepek/2.jpg", cim: "2 kép", leiras: "2 kép leírás" },

    { kep: "kepek/3.jpg", cim: "3 kép", leiras: "2 kép leírás" },
  ];
  let aktindex = 0;

  Obj.forEach(function (adat,index) {
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    const megjelen = new Megjelenit(ujElem, adat,index);
    //console.log(ujElem);
  });
  const nagykepSzulo = $("#nagykepTarolo");
  const ujElem = sablonElem.clone().appendTo(nagykepSzulo);
  const nagyKep = new Megjelenit(ujElem,Obj[aktindex]);

  sablonElem.remove();

  $(window).on("kepValasztas",(event) => {
      console.log(event.detail);
      nagyKep.setAdatok(event.detail);
      aktindex = event.detail.index;
    });

  $("#bal").on("click", function () {
    aktindex--;
    if (aktindex < 0) {
      aktindex = Obj.length - 1;
    }
    nagyKep.setAdatok(Obj[aktindex]);
  });
  
  $("#jobb").on("click", function () {
    aktindex++;
    if (aktindex > Obj.length - 1) {
      aktindex = 0;
    }
    nagyKep.setAdatok(Obj[aktindex]);
  });
});
