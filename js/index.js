//* Mudança de pagina
const next = document.getElementById('next');
const back = document.getElementById('back');

//* Calculo IMC
const calcular = document.getElementById('calcular');

calcular.addEventListener("click", () => {
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  let imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))
  if (imc < 18.4) {
    document.getElementById('result').innerHTML = `${imc.toFixed(2)} <p id="info">Abaixo do Peso</p>`
  } else if (imc >= 18.5 && imc <= 24.9) {
    document.getElementById('result').innerHTML = `${imc.toFixed(2)} <p id="info">Peso Ideal</p>`
  } else if (imc >= 25 && imc <= 29.9) {
    document.getElementById('result').innerHTML = `${imc.toFixed(2)} <p id="info">Sobrepeso</p>`
  } else if (imc >= 30 && imc <= 34.9) {
    document.getElementById('result').innerHTML = `${imc.toFixed(2)} <p id="info">Obesidade grau 1</p>`
  } else if (imc >= 35 && imc <= 39.9) {
    document.getElementById('result').innerHTML = `${imc.toFixed(2)} <p id="info">Obesidade grau 2</p>`
  } else if (imc > 40) {
    document.getElementById('result').innerHTML = `${imc.toFixed(2)} <p id="info">Obesidade grau 3</p>`
  } else {
    document.getElementById('result').innerHTML = `${imc.toFixed(2)} <p id="info">Preencha os campos ao lado</p>`
  }
})
