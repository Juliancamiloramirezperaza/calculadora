var ca = {
    teclas: document.querySelectorAll("#calcular ul li"),
    accion: null,
    digito: null,
    operacion: document.querySelector("#operaciones"),
    resultado: false,
    cantidecimal: false,
    cantisignos: 0
  };
  
  var me = {
    inicio: function() {
      for (var i = 0; i < ca.teclas.length; i++) {
        ca.teclas[i].addEventListener("click", me.oprimirteclas);
      }
    },
  
    oprimirteclas: function(evento) {
      ca.accion = evento.target.getAttribute("class");
      ca.digito = evento.target.innerHTML;
      me.calculadora(ca.accion, ca.digito);
    },
  
    calculadora: function(accion, digito) {
      ca.cantisignos = 0;
  
      switch (accion) {
        case "numero":
          if (ca.operacion.innerHTML === "0") {
            ca.operacion.innerHTML = digito;
          } else {
            ca.operacion.innerHTML += digito;
          }
          break;
  
        case "operador":
          ca.cantisignos++;
          if (ca.cantisignos == 1) {
            if (ca.operacion.innerHTML == "0") {
              ca.operacion.innerHTML = "0";
            } else {
              ca.operacion.innerHTML += digito;
              ca.cantidecimal = true;
              ca.resultado = false;
            }
          }
          break;
  
        case "decimal":
          console.log("decimal");
          if (!ca.cantidecimal && ca.cantisignos != 1) {
            ca.operacion.innerHTML += digito;
            ca.cantidecimal = true;
            ca.resultado = false;
          }
          break;
  
        case "igual":
          console.log("igual");
          ca.operacion.innerHTML=eval(ca.operacion.innerHTML);
          ca.resultado=true;
          break;
      }
    },
    borrarcalcu: function() {
      ca.resultado = false;
      ca.operacion.innerHTML = 0;
    }
  };
  
  me.inicio();
  
  