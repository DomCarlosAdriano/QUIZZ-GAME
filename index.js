let caixaPrincipal = document.querySelector(".caixa-principal")
let ponto = document.querySelector(".ponto")
let fase = document.querySelector(".fase")
let pergunta = document.querySelector(".pergunta p")
let a = document.querySelector("#a")
let b = document.querySelector("#b")
let c = document.querySelector("#c")
let d = document.querySelector("#d")
let la = document.querySelector("#la")
let lb = document.querySelector("#lb")
let lc = document.querySelector("#lc")
let ld = document.querySelector("#ld")
let button = document.querySelector(".butao")
let score = 0
let numeroFase = 1


// creditos finais

function final(){
  caixaPrincipal.style.display = "none" 
  let body = document.querySelector("body")
  body.innerHTML = ` 
<div style="background-color: bisque;  padding: 3rem;  height:50rem; diplay:flex; justify-content: center;text-align: center; align-items: center;  ">
 <p style="font-size: 2rem; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: white; height:100%;  padding-inline: 1rem;">
   <span style="font-size: 3rem; margin-bottom: 2rem; ">PARABÉNS VOCÊ FINALIZOU O QUIZZ GAME</span>
Você jogou 10 fases e acertou ${score} perguntas.
 </p>
</div>`
}




function fase1(){
  ponto.innerText = score
  fase.innerText = "FASE 1#"
  pergunta.innerText = "1+1=?"
  fase.value="1"
  button.innerText="VERIFICAR RESPOSTA"
  a.style.opacity= 1;
  b.style.opacity= 1;
  c.style.opacity= 1;
  d.style.opacity= 1;

  la.innerText="2"
  lb.innerText="8"
  lc.innerText="5"
  ld.innerText="7"
}

function fase2(){
  fase.innerText = "FASE 2#"
  pergunta.innerText = "4+4=?"
  la.innerText="21"
  lb.innerText="8"
  lc.innerText="9"
  ld.innerText="2"
}

function fase3(){
  fase.innerText = "FASE 3#"
  pergunta.innerText = "8+8=?"
  la.innerText="14"
  lb.innerText="13"
  lc.innerText="77"
  ld.innerText="16"
}


function fase4(){
  fase.innerText = "FASE 4#"
  pergunta.innerText = "100+50=?"
  la.innerText="339"
  lb.innerText="134"
  lc.innerText="150"
  ld.innerText="200"
}

function fase5(){
  fase.innerText = "FASE 5#"
  pergunta.innerText = "100+99=?"
  la.innerText="199"
  lb.innerText="233"
  lc.innerText="500"
  ld.innerText="280"
}

function fase6(){
  fase.innerText = "FASE 6#"
  pergunta.innerText = "333+333=?"
  la.innerText="434"
  lb.innerText="999"
  lc.innerText="666"
  ld.innerText="68"
}

function fase7(){
  fase.innerText = "FASE 7#"
  pergunta.innerText = "369+99=?"
  la.innerText="235"
  lb.innerText="468"
  lc.innerText="196"
  ld.innerText="290"
}

function fase8(){
  fase.innerText = "FASE 8#"
  pergunta.innerText = "QUAL É O OBJETIVO DO NARUTO?"
  la.innerText="Lutar até a morte"
  lb.innerText="Fazer amigos"
  lc.innerText="Uzumaki Naruto tinha objetivo: ser reconhecido por todos e se tornar Hokage (líder de Konoha)."
  ld.innerText="Aceitar a Jesus e espalhar a palavra de Deus pelo mundo"
}


function fase9(){
  fase.innerText = "FASE 9#"
  pergunta.innerHTML = ' <img src="./img/jack.jpg" alt="" style="height:14rem ;">'
  la.innerText="o nome dele é CHINES DA SHOPEE"
  lb.innerText="o nome dele é freddie mercury"
  lc.innerText="o nome dele é jackie chan"
  ld.innerText="o nome dele é michael jackson"

}

function fase10(){
  fase.innerText = "FASE 10#"
  pergunta.innerHTML = ' <img src="./img/ONH.jpg" alt="" style="height:14rem ;">'
  la.innerText="o nome dele é freddie mercury"
  lb.innerText="o nome dele é john lennon"
  lc.innerText="o nome dele é michael jackson"
  ld.innerText="o nome dele é jackie chan"

}



function butao(){ 
  numeroFase += 1
  console.log(numeroFase)

if(numeroFase == 2){
  fase1()
}

if(numeroFase == 3){
 
   if(a.checked){ 
     alert('Parabéns Você Acertou a Questão e Ganhou 1 Ponto')
     ponto.innerText = score += 1
    } else{ alert("você errou a questão!") }
  
   fase2()   

}

if(numeroFase == 4){
  if(b.checked){
alert('Parabéns Você Acertou a Questão e Ganhou +1 Ponto')
ponto.innerText = score += 1
  } else{
alert("você errou a questão!")
  }
  fase3()
}

if(numeroFase == 5){
  if(d.checked){
alert('Parabéns Você Acertou a Questão e Ganhou +1 Ponto')
ponto.innerText = score += 1
  } else{
alert("você errou a questão!")
  }
  fase4()
}

if(numeroFase == 6){
  if(c.checked){
alert('Parabéns Você Acertou a Questão e Ganhou +1 Ponto')
ponto.innerText = score += 1
  } else{
alert("você errou a questão!")
  }
  fase5()
}

if(numeroFase == 7){
  if(a.checked){
alert('Parabéns Você Acertou a Questão e Ganhou +1 Ponto')
ponto.innerText = score += 1
  } else{
alert("você errou a questão!")
  }
  fase6()
}

if(numeroFase == 8){
  if(c.checked){
alert('Parabéns Você Acertou a Questão e Ganhou +1 Ponto')
ponto.innerText = score += 1
  } else{
alert("você errou a questão!")
  }
  fase7()
}

if(numeroFase == 9){
  if(b.checked){
alert('Parabéns Você Acertou a Questão e Ganhou +1 Ponto')
ponto.innerText = score += 1
  } else{
alert("você errou a questão!")
  }
  fase8()
}

if(numeroFase == 10){
  if(c.checked){
alert('Parabéns Você Acertou a Questão e Ganhou +1 Ponto')
ponto.innerText = score += 1
  } else{
alert("você errou a questão!")
  }
  fase9()
}

if(numeroFase == 11){
 
  if(c.checked){
alert('Parabéns Você Acertou a Questão e Ganhou +1 Ponto')
ponto.innerText = score += 1
  } else{
alert("você errou a questão!")
  }
  fase10()
}


if(numeroFase == 12){
 
  if(b.checked){
alert('Parabéns Você Acertou a Questão e Ganhou +1 Ponto')
ponto.innerText = score += 1
  } else{
alert("você errou a questão!")
  }
  
 final()
}


}
