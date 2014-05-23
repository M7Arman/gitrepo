var questions = [
   {
      "questionText" : "The main character in the 2000 movie Gladiator fights what animal in the arena?",
      "questionAnswer" : [ "A", "B", "C", "D" ],
      "questionTrueAnswer" : "D",
   },


   {
      "questionText" : "According to a proverb about hope, Theres always a light at the end of what?",
      "questionAnswer" : [ "The journey", "The day", "The tunnel", "E.T.'s finger" ],
      "questionTrueAnswer" : "C",

   },

]

var answerId = [ "answerOne", "answerTwo", "answerThree", "answerFour" ];












    var questionNumber = 1;
    var score = 0;

window.onload = function gamePlay () {
   printQuestion();
}

function printQuestion() {
   document.getElementById("question").innerHTML = questionNumber + ") " + questions[1].questionText;
   for (var i=0; i<4; i++) {
      document.getElementById(answerId[i]).innerHTML = questions[1].questionAnswer[i];
   }

}

function answerVariant(answerVar) {
   var answerV=answerVar;
   console.log(answerV);
   if (answerV == questions[1].questionTrueAnswer)
      trueAnswer();
   else
      falseAnswer();
}

function trueAnswer() {
    console.log("YES");
    score = score + 100;
    questionNumber++;
    printQuestion();
}

function falseAnswer() {
   console.log("NO");
}
