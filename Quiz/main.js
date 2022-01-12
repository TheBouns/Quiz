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
  console.log(data, title);
  document.getElementById("question").innerHTML = title;
};
const getAnswers = async function (data) {
  let correctAns = data.correct_answer;
  let falseAns = data.incorrect_answers;
  let answer = [];
  answer.push(correctAns);
  answer = answer.concat(falseAns);
  console.log(answer);
  for (let i = 0; i < answer.length; i++) {
    document.getElementById(
      "question"
    ).innerHTML += `<label name="question">${answer[i]}</label> <input id="answer" type="radio" value="${answer[i]}" name="question">`;
  }
  let ans = document.getElementById("answer").value;
  ans.onclick(validateAnswer);
};

function validateAnswer(rigth, value) {
  console.log("funciono");
  if (rigth == value) console.log("cierto");
}

const quiz = async function () {
  let data = await getQuestions().then();
  getTitle(data);
  getAnswers(data);
};

quiz().then();
