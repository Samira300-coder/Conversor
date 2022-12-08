function converterLibra() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmLibraNumerico = parseFloat(valor);

  var valorEmReal = valorEmLibraNumerico / 7.26;
  valorEmReal = parseFloat(valorEmReal).toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em libras é £ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmDolar = valorEmRealNumerico / 5;
  valorEmDolar = parseFloat(valorEmDolar).toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Dolar é $ " + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterIene() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmIeneNumerico = parseFloat(valor);

  var valorEmIene = valorEmIeneNumerico / 0.0048;
  valorEmIene = parseFloat(valorEmIene).toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Iene é ¥ " + valorEmIene;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);

  var valorEmEuro = valorEmEuroNumerico / 6.18;
  valorEmEuro = parseFloat(valorEmEuro).toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Euros é €  " + valorEmEuro;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmBitcoinNumerico = parseFloat(valor);

  var valorEmBitcoin = valorEmBitcoinNumerico / 246.371;
  valorEmBitcoin = parseFloat(valorEmBitcoin).toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Bitcoin é ฿  " + valorEmBitcoin;
  elementoValorConvertido.innerHTML = valorConvertido;
}