var jsonQuestion = {
    "ques" : [ 
        "The main character in the 2000 movie Gladiator fights what animal in the arena?",
        "According to a proverb about hope, Theres always a light at the end of what?" ,
        "tam taram tadam tadam",
        "........."
    ],

    "answer" : [
        {"answerA":"Leopard", "answerB":"Lion", "answerC":"Jackal", "answerD":"Tiger"},
        {"answerA":"The journey", "answerB":"The day", "answerC":"The tunnel", "answerD":"E.T.'s finger"},
    ],

    "trueAnswer" : [ "4" ]

};
    var questionNumber = 1

window.onload = function writeQuestion() {
    document.getElementById("question").innerHTML = questionNumber + ") " + jsonQuestion.ques[questionNumber-1];
    document.getElementById("answerOne").innerHTML =/* "A. " +*/ jsonQuestion.answer[questionNumber-1].answerA;
    document.getElementById("answerTwo").innerHTML = /*"B. " + */jsonQuestion.answer[questionNumber-1].answerB;
    document.getElementById("answerThree").innerHTML = /*"C. " + */jsonQuestion.answer[questionNumber-1].answerC;
    document.getElementById("answerFour").innerHTML = /*"D. " + */jsonQuestion.answer[questionNumber-1].answerD;
}

function answerVariant(answerVar) {
    console.log(answerV);
    var answerV=answervar;

}
