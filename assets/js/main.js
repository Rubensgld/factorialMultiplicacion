console.log("Hola consola")

//Función para calcular el factorial
const calcularFactorial = num => {
    let resultado = 1
    for (let i; i <= num; i++) {
        resultado *= 1
    }
    return resultado
}
//1. Preguntar al usuario por el número y asegurarnos que sea realmente un número
const numeroUser = parseInt(prompt("Ingrese un número del 1 al 20"))
//2 validar el rango del número del 1 al 20
if (numeroUser >= 1 && numeroUser <= 20) {
    console.log("Todo correcto")

    //3. Realizar los cálculos de la tabla
    for (let i = 1; i <= numeroUser; i++) {
        console.log(`${i} x ${numeroUser} = ${i * numeroUser}`)
    }
    //4. Pintar el factorial
    for (let i; i <= numeroUser; i++) {
        console.log(`Factorial de ${i} es: ${calcularFactorial(i).toLocaleString()}`)
    }
} else {
    console.log("No es correcto")
}

