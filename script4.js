const body = document.body;
const whiteCar = document.getElementById("white");
const redCar = document.getElementById("red");
const resultDisplay = document.getElementById("result");
const resetBtn = document.getElementById("resetar");
const accelerateBtn = document.getElementById("acelerar");
const decelerateBtn = document.getElementById("desacelerar");

document.getElementById("white")
.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    var result = document.getElementById("result");
    result.innerHTML = "branco";

});

document.getElementById("red")
.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";

    var result = document.getElementById("result");
    result.innerHTML = "vermelho";

});

document.getElementById("white")
.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    var result = document.getElementById("result");
    result.innerHTML = "branco";

});

document.getElementById("red")
.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";

    var result = document.getElementById("result");
    result.innerHTML = "vermelho";

});document.getElementById("white")
.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    var result = document.getElementById("result");
    result.innerHTML = "branco";

});

document.getElementById("red")
.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";

    var result = document.getElementById("result");
    result.innerHTML = "vermelho";

});

document.getElementById("branco")
.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    var result = document.getElementById("result");
    result.innerHTML = "branco";

});

document.getElementById("vermelho")
.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";

    var result = document.getElementById("result");
    result.innerHTML = "vermelho";

});

if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    if (resultDisplay) resultDisplay.innerHTML = '?';

  });
}

if (accelerateBtn) {
    let position = 0;
function andarParaFrente() {
    posicaoAtual = posicaoAtual + 50;

    carro.style.left = posicaoAtual + 'px';

    console.log("Nova posição do carro: " + posicaoAtual + "px");
}
    accelerateBtn.addEventListener('click', () => {
        if (body.style.backgroundColor === 'white') {
            if (resultDisplay) resultDisplay.innerHTML = 'branco acelerado';
        } else if (body.style.backgroundColor === 'red') {
            if (resultDisplay) resultDisplay.innerHTML = 'vermelho acelerado';
        }
    });
}

if (decelerateBtn) {
    decelerateBtn.addEventListener('click', () => {

        
        if (body.style.backgroundColor === 'white') {
            if (resultDisplay) resultDisplay.innerHTML = 'branco desacelerado';
        } else if (body.style.backgroundColor === 'red') {
            if (resultDisplay) resultDisplay.innerHTML = 'vermelho desacelerado';
        }
    });
}

let position = 0;
function andarParaFrente() {
    posicaoAtual = posicaoAtual + 50;

    carro.style.left = posicaoAtual + 'px';

    console.log("Nova posição do carro: " + posicaoAtual + "px");
}


botaoAcelerar.addEventListener('click', andarParaFrente);