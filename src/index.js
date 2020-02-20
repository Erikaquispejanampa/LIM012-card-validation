

/****** Metodos *****/
const CrearCuenta = (event0) => {
    // debugger;
      
    document.getElementById("Parte1").style.display = "block";
    document.getElementById("Parte2").style.display = "none";
    document.getElementById("Parte3").style.display = "none";
    document.getElementById("Presentacion").style.display = "none";

  }
  
const Inicio = function (param0) {
    // debugger;
    document.getElementById("Parte1").style.display = "none";
    document.getElementById("Parte2").style.display = "none";
    document.getElementById("Parte3").style.display = "none";
    // document.getElementById("Resultado").style.display = "none";
    document.getElementById("Presentacion").style.display = "block";
    
}

const Continuar = (event1) => {
    // debugger;
      
    let nombre =  document.getElementById("txtNombre");
    let apellido = document.getElementById("txtApellido");
    let correo = document.getElementById("txtCorreo");

    if (nombre.value.length > 0 && apellido.value.length > 0 && correo.value.length > 0){
        document.getElementById("Parte1").style.display = "none";
        document.getElementById("Parte2").style.display = "block";
        document.getElementById("Parte3").style.display = "none";
        document.getElementById("Presentacion").style.display = "none";

    }
    else{
        alert("Ingrese los datos por favor");
    }
}

const Validar = (event2) => {
    // debugger;
      
    let nombre = document.getElementById("txtNombre").value;
    let numTarjeta =  document.getElementById("txtNumTarjeta").value;
    let ultimosdig = numTarjeta.substr(numTarjeta.length - 4, 4);

    document.getElementById("Parte1").style.display = "none";
    document.getElementById("Parte2").style.display = "none";
    document.getElementById("Parte3").style.display = "block";
    document.getElementById("Presentacion").style.display = "none"; 
    
    numTarjeta = "********"  + ultimosdig;
    document.getElementById("txtNumTarjetaFinal").value = numTarjeta;
    document.getElementById("lblNombreFinal").innerHTML = nombre; 
  
}
/****** Metodos *****/


/****** Eventos *****/
  const btnCrearCuenta = document.getElementById('btnCrearCuenta');
  btnCrearCuenta.addEventListener('click', CrearCuenta, false);

  const btnContinuar = document.getElementById('btnContinuar');
  btnContinuar.addEventListener('click', Continuar, false);

  const btnValidar = document.getElementById('btnValidar');
  btnValidar.addEventListener('click', Validar, false);
/****** Eventos *****/

// ejecucion de metodos

Inicio(undefined);

// Siguiente1(undefined);
// Siguiente2(undefined);

