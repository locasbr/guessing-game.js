let numberSecret = Math.trunc(Math.random() * 5 + 1);
let highScore = 0;
let score = 20;
let again = document.querySelector(".again");


function funcaoCorreto() {
  let mensagem = (document.querySelector(".message").innerHTML =
    "🎉Parabéns você acertou");
  let fundoVerde = (document.querySelector("body").style.backgroundColor =
    "#60b347");

  highScore++;

  document.querySelector(".highscore").innerHTML = highScore;
}

function numberMaior() {
  let mensagem = (document.querySelector(".message").innerHTML = "muito baixo");
  score--;
  document.querySelector(".score").innerHTML = score;
}

function numberMenor() {
  let mensagem = (document.querySelector(".message").innerHTML = "muito alto");
  score--;
  document.querySelector(".score").innerHTML = score;
}

function scoreIgualAZero() {
  if (score === 0) {
    let message = (document.querySelector(".message").innerHTML =
      "Você perdeu o jogo");
    let backgroundRed = (document.querySelector("body").style.backgroundColor =
      "red");
    let check = document.querySelector(".check").setAttribute("disabled", true);
  }
}


let botaoCheck = document.querySelector(".check");
botaoCheck.addEventListener("click", function () {
  let pegarNumeroDoCheck = document.querySelector(".guess").value;
  console.log(pegarNumeroDoCheck);

  if (!pegarNumeroDoCheck) {
    mensagem = (document.querySelector(".message").innerHTML =
      "🛑Passe um numero");
  }

  if (numberSecret == pegarNumeroDoCheck) {
    funcaoCorreto();
    adivinhe = document.querySelector(".number").textContent = numberSecret;
  } else if (numberSecret > pegarNumeroDoCheck) {
    numberMaior();
    scoreIgualAZero();
  } else if (numberSecret < pegarNumeroDoCheck) {
    numberMenor();
    scoreIgualAZero();
  }
});

function resetar(){
  score = 20;
  document.querySelector('.score').innerHTML = score;
  ;
  document.querySelector(".number").textContent = numberSecret = '?';
  document.querySelector(".message").innerHTML = "Comece a adivinhar...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector('.guess').value = '';
  numberSecret = Math.trunc(Math.random() * 5 + 1); 
  
  
  

 
}

again.addEventListener('click', function(){
resetar();
 
   
})