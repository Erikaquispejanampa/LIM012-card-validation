
const isValid = (creditCardNumber) =>{
    // debugger;
    console.log( `creditCardNumber = ` + creditCardNumber);
    let listNum = creditCardNumber.split('');
    let totalGeneral = 0;


      for (let i = 0, l = listNum.length; i < l; i++) {
        
        let valor = listNum[i];
        
        //Si es par
        if (i % 2 === 0) {
            // debugger;
            console.log( `i = ` + i + `  valor=` + valor)
            valor *= 2;
            console.log( `i = ` + i + `  valor=` + valor)
            
            //si es mas de 2 digitos
            if (valor.toString().length > 1){
                let digitos = valor.toString().split('');
                let total = 0;
                
                for (let i2 = 0; i2 < digitos.length; i2++) {
                    total +=  Number.parseInt(digitos[i2]);                    
                }

                valor = total;             
            }  
            console.log( `i = ` + i + `  valor=` + valor);        
            listNum[i] = valor;
        }   
        
        totalGeneral += Number.parseInt(valor);
      }
    console.log( `----------------------------------------`)
    console.log( `SUMA TOTAL ` + totalGeneral )

    if ( totalGeneral % 10 === 0){
        console.log( `SI MULTIPLO DE 10`);
        return true;
    }

    return false;
};

const maskify = (creditCardNumber) => {

  let t_caracteres = creditCardNumber.length - 4; // total de caracteres
  let ultimosdig = creditCardNumber.substr(t_caracteres, 4);

  if(t_caracteres > 0){
    creditCardNumber =  ("#").repeat(t_caracteres) + ultimosdig;
    return creditCardNumber;
  }

  return ultimosdig;

};

const soloNumeros = (event) =>{
   
  if(Number.isInteger(event.key) )
      return false;
  
  return true;
}

// exportamos los metodos que se reutilizaran en otros archivos js
export  {isValid,maskify,soloNumeros} ;