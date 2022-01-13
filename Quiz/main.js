const getQuestions = async function () {
  try {
    let res = await axios.get("https://opentdb.com/api.php?amount=1");
    return res.data.results[0];
  } catch (error) {
    console.log(error);
  }
};
const getTitle = async function (data) {
  let title = data.question;
  document.getElementById("question").innerHTML = `<h1>${title}</h1>`;
};
const getAnswers = async function (data) {
  let correctAns = data.correct_answer;
  let encondedCorrectAns = window.btoa(correctAns);
  let falseAns = data.incorrect_answers;
  let answer = [];
  answer.push(correctAns);
  answer = answer.concat(falseAns).sort();
  document.getElementById("response").innerHTML = "";
  for (let i = 0; i < answer.length; i++) {
    document.getElementById(
      "response"
    ).innerHTML += `<div id="answer${i}" onclick=" myvalue('${answer[i]}' ,'${encondedCorrectAns}')" >${answer[i]}</div>`;
  }
};

const quiz = async function () {
  let data = await getQuestions().then();
  getTitle(data);
  getAnswers(data);
};
function myvalue(value, correctAns) {
  let bcodeCorrectAns = window.atob(correctAns);
  let tries = document.getElementById("tries");
  let right = document.getElementById("right");
  let currentValueTries = Number(tries.textContent);
  let currentValueRight = Number(right.textContent);
  if (value === bcodeCorrectAns) {
    currentValueRight += 1;
    right.innerHTML = currentValueRight;
  }
  currentValueTries += 1;
  let totalRight = (currentValueRight * 100) / currentValueTries;
  let totalWrong =
    ((currentValueTries - currentValueRight) * 100) / currentValueTries;
  document.getElementById("right").style.width = `${totalRight}%`;
  document.getElementById("right").style.borderRadius = `10px`;

  document.getElementById("tries").style.width = `${totalWrong}%`;
  tries.innerHTML = currentValueTries;
  quiz().then();
}

quiz().then();
