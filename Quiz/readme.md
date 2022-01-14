# Quiz Preguntas Infinitas:

Este proyecto presenta el desarrollo de un juego tipo  "quiz".
El juego consta de 1 pregunta y 4 respuestas donde solamente una de estas es la correcta.
La duracion del juego(como indica el propio titulo), no tiene una duracion limitada, es decir,siempre lanzara preguntas hasta que se refresque la pagina. 

como dato curioso decir que los divs de las respuestas se generan en el DOM a partir de un literal Template. 
El problema surge en la funcion myValue().Donde los dos parametros para la validadicion de la respuesta, quedaba expuesto al inspeccionar la pagina. Para protegar la integridad del juego y no sospechar de la etica del jugador. Se decidio encriptar el valor de la varible CorrectAns mediante el uso de **window.atob/btoa()**.

##### Encriptacion de la variable CorrectAns: 
´´´js
const getAnswers = async function (data) {
  let correctAns = data.correct_answer;
  let encondedCorrectAns = window.btoa(correctAns);

for (let i = 0; i < answer.length; i++) {
    document.getElementById(
      "response"
    ).innerHTML += `<div id="answer${i}" onclick=" myvalue('${answer[i]}' ,'${encondedCorrectAns}')" >${answer[i]}</div>`;
  }
};
  
´´´
#### Y aqui la devolvemos a la normalidad:
~~~~
function myvalue(value, correctAns) {
  let bcodeCorrectAns = window.atob(correctAns);
  let tries = document.getElementById("tries");
  let right = document.getElementById("right");
  let currentValueTries = Number(tries.textContent);
  let currentValueRight = Number(right.textContent);
~~~~


![image](./imagenes/responsive4.png) 

aqui se pueden ver diferentes imagenes del responsive.

## 	:hammer: Construido con : 

- **HTML**
- **JavaScript**
- **Css**
- **Axios**
