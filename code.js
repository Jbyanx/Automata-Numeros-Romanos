
let numeroRomano;
let esValido;
let enviar = document.getElementById("enviar");
let respuesta = document.getElementById("respuesta");
let inputNumRomano;

enviar.addEventListener("click", magia);

function magia(){
    numeroRomano = document.getElementById("numRomano").value.toUpperCase();
    inputNumRomano = document.getElementById("numRomano");
    if (inputNumRomano.value.trim() === "") {
        event.preventDefault(); // previene el envío del formulario si el input está vacío
        alert("El campo no puede estar vacío.");
    }else{
        esValido = reconocerNumeroRomano(numeroRomano);
        if (esValido) {
            respuesta.innerHTML = ("El número romano "+ numeroRomano +"  es válido.");
            console.log(`El número romano ${numeroRomano} es válido.`);
        } else {
            respuesta.innerHTML = ("El número romano "+ numeroRomano +"  NO es válido.");
            console.log(`El número romano ${numeroRomano} no es válido.`);
        }
    }    
}

function reconocerNumeroRomano(numeroRomano) {
    const regex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  
    return regex.test(numeroRomano);
}