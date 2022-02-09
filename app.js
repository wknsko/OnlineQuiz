const questContainer = document.getElementById('quiz');
class Question  {
  constructor(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  valueOfRightAnswer() {
    let value;
    switch(this.correctAnswer) {
      case 'a':
      value = this.answers.a;
      break;
      case 'b':
      value = this.answers.b;
      break;
      case 'c':
      value = this.answers.c;
      break;
    }
    return value;
  }



}
class Answers{
  constructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
  }
}
//const answers1 = new Answer(3,5,115)
const arr = [
  new Question('Who is the Patron Saint of Spain?', new Answers('St James','St John','St Benedict'), 'a'),
  new Question('Which of these means a speech in a play where a character talks to themselves rather than to other characters?', new Answers('Interlude','Revue','Soliloquy'), 'c'),
  new Question(`In the Vicar of Dibley, what was the name of the vicar's clueless friend?`, new Answers('Alice','Beatrice','Charlotte'), 'a'),
  new Question('Casterly Rock is the ancestral home of which family in Game of Thrones?', new Answers('The Starks',`The Tully's`,'The Lannisters'), 'c'),
  new Question('Which breed of dog used to be sacred in China?', new Answers('Cockapoo','Pekingese','Spaniel'), 'b'),
  new Question(`Which philosopher coined the term 'I think, therefore I am'?`, new Answers('Plato','Descartes','Socrates'), 'b'),
  new Question('Who was mayor of London before Boris Johnson?', new Answers('Sadiq Khan','John Major','Ken Livingston'), 'c')];


function showQuestions() {
  arr.forEach((el) => {
    showQuestion(el);
});
};

function showQuestion(q) {
    document.getElementById('quiz').innerHTML += `
    <div class="question-body">
        <div class="question-text">${q.question}</div>
        <input type="radio" id="a" name="${arr.indexOf(q)}" value="${q.answers.a}">
        <label for="a" class="q-var">${q.answers.a}</label>
        <input type="radio" id="b" name="${arr.indexOf(q)}" value="${q.answers.b}">
        <label for="b" class="q-var">${q.answers.b}</label>
        <input type="radio" id="c" name="${arr.indexOf(q)}" value="${q.answers.c}">
        <label for="c" class="q-var">${q.answers.c}</label>
    </div>

  `;

}
  let rightAnswers = 0;
let clickCounter = 0;

function getResults() {
  clickCounter++;
  if (clickCounter==1) {
    document.getElementById('res').innerHTML = 'Results are in';
    document.getElementById('res').disabled = true;
  }
  arr.forEach((el) => {
    toAnswer(el);
});

document.getElementById('results').innerHTML += `
<div class="per">Right Answers: ${rightAnswers}</div>
<button onclick="location.reload();" class="reload-btn">Try again</btn>`;

};





function toAnswer(ans) {

  //const btn = document.querySelector('#toAnswer');
  const radioButtons = document.querySelectorAll(`input[name="${arr.indexOf(ans)}"]`);
  let selectedAnswer;
  for(const radioButton of radioButtons) {
    if(radioButton.checked) {
      selectedAnswer = radioButton.value;
      break;
    }
  }

  if(ans.valueOfRightAnswer() == selectedAnswer) {
    document.getElementById('results').innerHTML += `
    <div class="right"> ${arr.indexOf(ans)} : You are right</div>`;
    rightAnswers += 1;
  } else {
    document.getElementById('results').innerHTML += `
    <div class="wrong">${arr.indexOf(ans)} : You are wrong! It's ${ans.valueOfRightAnswer()}</div>`
  }



};
