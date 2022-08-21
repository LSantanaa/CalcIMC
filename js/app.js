function start() {
  const btn = document.querySelector('#btn');
  const weight = document.querySelector('#weight');
  const height = document.querySelector('#height');

  weight.addEventListener('input', handleBtnClick);
  height.addEventListener('input', handleBtnClick);
  btn.addEventListener('click', handleBtnClick);
  handleBtnClick();
}

function calcIMC(weight, height) {
  return weight / (height * height);
}

function handleBtnClick() {
  const weight = document.querySelector('#weight');
  const height = document.querySelector('#height');
  const imcResult = document.querySelector('#imcResult');
  const imcFinal = document.querySelector('#imcFinal');

  let valueHeight = Number(height.value);
  let valueWeight = Number(weight.value);

  let imc = calcIMC(valueWeight, valueHeight).toFixed(2);
  let classificacaoImc = '';

  if (valueHeight == '' || valueWeight == '') {
    classificacaoImc.textContent = 'Insira os valores';
    imcResult.textContent = 'Insira os valores';
    return;
  }

  if (imc < 16) {
    classificacaoImc = 'Não há classificação, valores inválidos.';
  } else if (imc >= 16 && imc <= 16.99) {
    classificacaoImc = 'Muito abaixo do peso';
    imcResult.className = 'red';
    imcFinal.className = 'red';
  } else if (imc >= 17 && imc <= 18.49) {
    classificacaoImc = 'Abaixo do peso';
    imcResult.className = 'yellow';
    imcFinal.className = 'yellow';
  } else if (imc >= 18.5 && imc <= 24.99) {
    classificacaoImc = 'Peso normal';
    imcResult.className = 'green';
    imcFinal.className = 'green';
  } else if (imc >= 25 && imc <= 29.99) {
    classificacaoImc = 'Acima do peso';
    imcResult.className = 'yellow';
    imcFinal.className = 'yellow';
  } else if (imc >= 30 && imc <= 34.99) {
    classificacaoImc = 'Obesidade grau I';
    imcResult.className = 'yellow';
    imcFinal.className = 'yellow';
  } else if (imc >= 35 && imc <= 40) {
    classificacaoImc = 'Obesidade grau II';
    imcResult.className = 'red';
    imcFinal.className = 'red';
  } else if (imc >= 40) {
    classificacaoImc = 'Obesidade grau III';
    imcResult.className = 'red';
    imcFinal.className = 'red';
  }
  imc = imc.replace('.', ',');

  imcResult.textContent = imc;
  imcFinal.textContent = classificacaoImc;
}

start();
