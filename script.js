//--------------------------------------------------------------

function campoVacio(campo, valor) {
    if (valor.trim() === "") {
        mostrarResultado(campo, "Campo vacío. Ingresa un dato válido, por favor.");
        return true; // Retorna true si el campo está vacío
    }
    return false; // Retorna false si el campo no está vacío
}

function mostrarResultado(campo, mensajes) {
    if (typeof mensajes === 'string') {
        campo.textContent = mensajes;
    }

    //Si es lista de mensajes
    if (typeof mensajes === 'string') {
        campo.textContent = mensajes;
    } else {
        mensajes = Array.isArray(mensajes) ? mensajes : [mensajes];
        let mensajeHTML = mensajes.join("<br>");
        campo.innerHTML = mensajeHTML;
    }
}

// EJERCICIOS

//1

let tarjetaBus = document.querySelector("#cupoTarjetaBus");
let btnPasajes = document.querySelector(".btnCalculaPasajes");
let txtPasajes = document.querySelector(".txtPasajes");

btnPasajes.addEventListener("click", calcularPasajes);

function calcularPasajes() {
    const PRECIO_PASAJE = 1700;
    let cupoTarjetaBus = parseFloat(tarjetaBus.value);
    const numPasajes = Math.floor(cupoTarjetaBus / PRECIO_PASAJE);
    const totalPasajes = numPasajes * PRECIO_PASAJE;
    const cupoRestante = cupoTarjetaBus - totalPasajes;

    if (!isNaN(cupoTarjetaBus)) {
        if (cupoTarjetaBus === 0) {
            mostrarResultado(txtPasajes, "No tienes saldo");
        }
        let mensajes = [`Con el cupo actual de $${cupoTarjetaBus}, puedes comprar ${numPasajes} pasajes.`];
        if (numPasajes > 1) {
            mensajes.push(`Sus ${numPasajes} pasajes cuestan en total ${totalPasajes} y le queda un restante de ${cupoRestante}`);
        }
        if (numPasajes < 2) {
            mensajes.push(`Alerta: su cupo es limitado (menos de 2 pasajes), tiene ${numPasajes} pasajes.`);
            mensajes.push("Debe recargar su tarjeta.");
        }
        mostrarResultado(txtPasajes, mensajes);

    } else {
        mostrarResultado(txtPasajes, "Campo vacío");
    }
}

//2
let numIngresadoCero = document.querySelector("#numCero");
let btnNumeroCero = document.querySelector(".btnNumMayorCero");
let txtNumCero = document.querySelector(".txtNumMayorCero");

btnNumeroCero.addEventListener("click", numeroMayorCero);

function numeroMayorCero() {
    let valorIngresado = numIngresadoCero.value;

    if (campoVacio(txtNumCero, valorIngresado)) {
        return; // Sale de la función si el campo está vacío
    }

    valorIngresado = parseFloat(numIngresadoCero.value);

    if (!isNaN(valorIngresado)) {
        if (valorIngresado > 0) {
            mostrarResultado(txtNumCero, `El número ${valorIngresado} es mayor que 0.`);
        } else if (valorIngresado === 0) {
            mostrarResultado(txtNumCero, "El número ingresado es igual a 0.");
        } else {
            mostrarResultado(txtNumCero, `El número ${valorIngresado} no es mayor que 0.`);
        }
    } else {
        mostrarResultado(txtNumCero, "Valor ingresado no es un número válido.");
    }
}

//3
let inputNumber = document.querySelector(".inputNumber");
let buttonPar = document.querySelector(".btnEsPar");
let txtPar = document.querySelector(".txtPar");

inputNumber.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        evaluarNumero();
    }
});

buttonPar.addEventListener("click", evaluarNumero);

function evaluarNumero() {
    let valor = parseInt(inputNumber.value);
    if (isNaN(valor)) {
        mostrarResultado(txtPar, "Campo vacío");
    } else if (valor % 2 === 0) {
        mostrarResultado(txtPar, `El número ${valor} es par.`);
    } else {
        mostrarResultado(txtPar, `El número ${valor} es impar.`);
    }
}

//4
let inputViajero = document.querySelector("#puntosViajero");
let buttonPuntos = document.querySelector(".btnPuntosViajero");
let txtPuntos = document.querySelector(".txtPuntosViajero");

buttonPuntos.addEventListener("click", calcularPuntosAerolinea);

function calcularPuntosAerolinea() {
    let puntosViajero = parseInt(inputViajero.value);
    let claseTiquete;

    if (isNaN(puntosViajero)) {
        mostrarResultado(txtPuntos, "Campo vacío");
        return;
    }
    if (puntosViajero >= 2000) {
        claseTiquete = "Ejecutiva";
    } else if (puntosViajero >= 1000 && puntosViajero <= 1999) {
        claseTiquete = "Normal";
    } else if (puntosViajero < 1000 && puntosViajero > 0) {
        claseTiquete = "Económica";
    } else {
        claseTiquete = "No válida";
    }

    mostrarResultado(txtPuntos, `El viajero con ${puntosViajero} puntos tiene acceso a la clase ${claseTiquete}.`);
}

//5
let inputNum1 = document.querySelector("#primerNumero");
let inputNum2 = document.querySelector("#segundoNumero");
let buttonNumeros = document.querySelector(".btnIntercambio");
let txtIntercambio = document.querySelector(".txtIntercambio");

buttonNumeros.addEventListener("click", intercambioNumeros);

function intercambioNumeros() {
    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value);

    if (isNaN(num1) || isNaN(num2)) {
        mostrarResultado(txtIntercambio, "Campo vacío");
    } else if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
        mostrarResultado(txtIntercambio, `Los valores han sido intercambiados. Ahora, el primer número es ${num1} y el segundo número es ${num2}.`);
    } else {
        mostrarResultado(txtIntercambio, "No se requiere intercambio. El primer número no es mayor que el segundo.");
    }
}

//6
let inputNota1 = document.querySelector("#primerNota");
let inputNota2 = document.querySelector("#segundaNota");
let inputNota3 = document.querySelector("#tercerNota");
let buttonNotas = document.querySelector(".btnNotas");
let txtNotas = document.querySelector(".txtNotas");

buttonNotas.addEventListener("click", calcularNotaFinal);

function validarNota(nota) {
    return !isNaN(nota) && nota >= 0 && nota <= 5;
}

function calcularNotaFinal() {
    let nota1 = parseFloat(inputNota1.value);
    let nota2 = parseFloat(inputNota2.value);
    let nota3 = parseFloat(inputNota3.value);

    const notaFinal = (nota1 * 0.3) + (nota2 * 0.3) + (nota3 * 0.4);
    const notaMinimaAprobatoria = 3.2;

    if (!validarNota(nota1) || !validarNota(nota2) || !validarNota(nota3)) {
        mostrarResultado(txtNotas, "Ingresa notas válidas entre 0 y 5.");
        return;
    } else if (notaFinal >= notaMinimaAprobatoria) {
        //toFixed(2) redondea a 2 el resultado
        mostrarResultado(txtNotas, `La nota final del estudiante es ${notaFinal.toFixed(2)}. ¡Felicidades! has aprobado la asignatura.`);
    } else {
        mostrarResultado(txtNotas, `La nota final del estudiante es ${notaFinal.toFixed(2)}. Lo siento, no has aprobado la asignatura.`);
    }
}

//7
let nombreVendedor = document.querySelector("#nombreVendedor");
let autosVendidos = document.querySelector("#autosVendidos");
let buttonSalario = document.querySelector(".btnAutos");
let txtSalario = document.querySelector(".txtSalario");

buttonSalario.addEventListener("click", calcularSalarioVendedor);

function calcularSalarioVendedor() {
    let pagoBase = 350;
    let comisionAutoVendido = 15;
    let bono15Autos = 40;
    let tasaImpuesto = 0.25;

    let nombre = nombreVendedor.value;
    let cantAutosVendidosMes = parseInt(autosVendidos.value);

    let sueldoBruto = pagoBase + (comisionAutoVendido * cantAutosVendidosMes);

    if (cantAutosVendidosMes > 15) {
        sueldoBruto += bono15Autos;
    }

    let impuesto = tasaImpuesto * sueldoBruto;
    let sueldoNeto = sueldoBruto - impuesto;

    if (campoVacio(txtSalario, nombre) || isNaN(cantAutosVendidosMes)) {
        mostrarResultado(txtSalario, "Algún campo esta vacío o incorrecto");
    } else {
        let mensaje = [`El vendedor ${nombre} tiene un sueldo bruto de ${sueldoBruto}`];
        mostrarResultado(txtSalario,);

        mensaje.push(`La tasa de impuesto aplicada es de ${(tasaImpuesto * 100)}%.`)
        mensaje.push(`Impuesto aplicado por valor de: ${impuesto}`);
        mensaje.push(`Su sueldo neto, despues de impuestos es: ${sueldoNeto}`);
        mostrarResultado(txtSalario, mensaje);
    }
}

//8
let inputNumero1 = document.querySelector("#variable1");
let inputNumero2 = document.querySelector("#variable2");
let inputNumero3 = document.querySelector("#variable3");
let inputChar = document.querySelector("#variableLetra");
let inputCaracter = document.querySelector("#variableCaracter");
let buttonVariables = document.querySelector(".btnVariables");
let txtVariables = document.querySelector(".txtVariables");

buttonVariables.addEventListener("click", calcularVariables);

function calcularVariables() {
    const num1 = parseFloat(inputNumero1.value);
    const num2 = parseFloat(inputNumero2.value);
    const num3 = parseFloat(inputNumero3.value);
    const letra = inputChar.value;
    const caracter = inputCaracter.value;
    let mensajes = [];

    let numMax = calcularMaximo(num1, num2, num3);
    let numMin = calcularMinimo(num1, num2, num3);
    let promedio = calcularPromedio(num1, num2, num3);
    let resultLetra = analizarLetra(letra);
    let resultCaracter = analizarCaracter(caracter);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        mensajes.push("Algun campo de números esta vacío.");
    } else {
        mensajes.push(`El máximo de los tres números es: ${numMax}`);
        mensajes.push(`El mínimo de los tres números es: ${numMin}`);
        mensajes.push(`El promedio de los tres números es: ${promedio}`);
    }

    mensajes.push(resultLetra);
    mensajes.push(resultCaracter);

    mostrarResultado(txtVariables, mensajes);
}

const calcularMaximo = (num1, num2, num3) => {
    return Math.max(num1, num2, num3);
}

const calcularMinimo = (num1, num2, num3) => {
    return Math.min(num1, num2, num3);
}

const calcularPromedio = (num1, num2, num3) => {
    return (num1 + num2 + num3) / 3;
}

const analizarLetra = (letra) => {
    let mensaje;
    let soloLetras = /^[A-Za-z]$/;

    if (letra === "") {
        mensaje = "Campo de letras vacío.";
        return mensaje;
    }
    if (letra.length === 1 && isNaN(letra) && soloLetras.test(letra)) {
        if (letra === letra.toUpperCase()) {
            mensaje = `La letra ${letra} es mayúscula.`;
        } else {
            mensaje = `La letra ${letra} es minúscula.`;
        }
    } else {
        mensaje = "Ingresa solo una letra por favor."
    }

    return mensaje;
}

const analizarCaracter = (caracter) => {
    let mensaje;

    if (caracter === "") {
        mensaje = "Campo de caracter vacío.";
        return mensaje;
    }
    if (!isNaN(caracter)) {
        mensaje = `El carácter ${caracter} es un dígito numérico.`;
    } else {
        mensaje = `El carácter ${caracter} no es un dígito numérico.`;
    }

    return mensaje;
}

//9
let inputNotaFinal = document.querySelector("#notaFinal");
let buttonNotaFinal = document.querySelector(".btnNotaFinal");
let txtNotaFinal = document.querySelector(".txtNotaFinal");

buttonNotaFinal.addEventListener("click", calcularAprobacion);

function calcularAprobacion() {
    let estado;
    let nota = parseFloat(inputNotaFinal.value);

    if (isNaN(nota)) {
        mostrarResultado(txtNotaFinal, "Campo vacío o incorrecto");
    } else {
        if (nota === 5.0) {
            estado = "EXCELENTE";
        } else if (nota >= 4.0 && nota <= 4.9) {
            estado = "BUENO";
        } else if (nota >= 3.0 && nota <= 3.9) {
            estado = "REGULAR";
        } else {
            estado = "DEFICIENTE";
        }

        mostrarResultado(txtNotaFinal, `El estado del estudiante según la nota ${nota} es: ${estado}`);
    }
}

//10
let inputNotaEstud1 = document.querySelector("#notaPersona1");
let inputNotaEstud2 = document.querySelector("#notaPersona2");
let inputNotaEstud3 = document.querySelector("#notaPersona3");
let buttonNotasEstud = document.querySelector(".btnNotasEstud");
let txtNotasEstud = document.querySelector(".txtNotasestud");

buttonNotasEstud.addEventListener("click", rendimientoEstudiantes);

function rendimientoEstudiantes() {
    let notaEstdiante1 = parseFloat(inputNotaEstud1.value);
    let notaEstdiante2 = parseFloat(inputNotaEstud2.value);
    let notaEstdiante3 = parseFloat(inputNotaEstud3.value);
    let notasTotales = [notaEstdiante1, notaEstdiante2, notaEstdiante3];
    let mensajes = [];

    if (isNaN(notaEstdiante1) || isNaN(notaEstdiante2) || isNaN(notaEstdiante3)) {
        mensajes.push("Algun campo esta vacío o incorrecto.");
    } else {
        let mayorRendimiento = calculaMayorRendimiento(notasTotales);
        mensajes.push(mayorRendimiento);

        let menorRendimiento = calculaMenorRendimiento(notasTotales);
        mensajes.push(menorRendimiento);
    }

    mostrarResultado(txtNotasEstud, mensajes);
}

const calculaMayorRendimiento = (notas) => {
    let notaMaixma = notas[0];
    let numeroEstudiante = 0;
    let mensaje = [];

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > notaMaixma) {
            notaMaixma = notas[i];
            numeroEstudiante = i;
        }
    }

    mensaje.push(`La nota mayor fue de ${notaMaixma}`);
    mensaje.push(` El estudiante numero ${numeroEstudiante + 1} obtuvo el mayor rendimiento.`);
    return mensaje;
}

const calculaMenorRendimiento = (notas) => {
    let notaMinima = notas[0];
    let numeroEstudiante = 0;
    let mensaje = [];

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < notaMinima) {
            notaMinima = notas[i];
            numeroEstudiante = i;
        }
    }

    mensaje.push(`La nota menor fue de ${notaMinima}`);
    mensaje.push(` El estudiante numero ${numeroEstudiante + 1} obtuvo el menor rendimiento.`);
    return mensaje;
}

//11
let inputNombreJugador = document.querySelector("#nombreJugador");
let inputDocJugador = document.querySelector("#docJugador");
let inputEdadJugador = document.querySelector("#edadJugador");
let buttonEquipos = document.querySelector(".btnFutbol");
let txtEquipos = document.querySelector(".txtFutbol");

buttonEquipos.addEventListener("click", calcularEquipo);

function calcularEquipo() {
    let nombre = inputNombreJugador.value;
    let documento = inputDocJugador.value;
    let edad = parseInt(inputEdadJugador.value);
    let equipo;

    if (campoVacio(txtEquipos, nombre) || campoVacio(txtEquipos, documento) || isNaN(edad)) {
        return;
    } else {
        if (edad >= 25 && edad <= 40) {
            equipo = "Profesionales";
        } else if (edad >= 18 && edad <= 24) {
            equipo = "Aficionados";
        } else if (edad >= 12 && edad <= 17) {
            equipo = "Novatos";
        } else {
            equipo = "No asignado";
        }

        mostrarResultado(txtEquipos, `El jugador ${nombre} con cédula ${documento} de ${edad} años será asignado al equipo ${equipo}.`);
    }
}

//12
let inputIntercambio1 = document.querySelector("#intercambio1");
let inputIntercambio2 = document.querySelector("#intercambio2");
let inputIntercambio3 = document.querySelector("#intercambio3");
let buttonIntercambios = document.querySelector(".btnTresIntercambios");
let txtNumIntercambio = document.querySelector(".txtTresIntercambios");

buttonIntercambios.addEventListener("click", intercambiarMayor);

function intercambiarMayor() {
    let number1 = parseInt(inputIntercambio1.value);
    let number2 = parseInt(inputIntercambio2.value);
    let number3 = parseInt(inputIntercambio3.value);

    if(isNaN(number1) || isNaN(number2) || isNaN(number3)) {
        mostrarResultado(txtNumIntercambio, "Algun campo esta vacío.");
    } else {
        if (number2 > number1 && number2 > number3) {
            // Intercambiar los valores de num1 y num3
            const temp = number1;
            number1 = number3;
            number3 = temp;
    
            mostrarResultado(txtNumIntercambio, `Los números intercambiados son: ${number1}, ${number2}, ${number3}`);
        } else {
            mostrarResultado(txtNumIntercambio, "No se cumple la condición para el intercambio.");
        }
    }
}