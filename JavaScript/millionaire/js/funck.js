var questions = [

{
    "questionText" : "According to a proverb about hope, Theres always a light at the end of what?",
    "questionAnswer" : [ "The journey", "The day", "The tunnel", "E.T.'s finger" ],
    "questionTrueAnswer" : "C",

},

{
    "questionText" : "Which of these kills its victims by constriction?",
    "questionAnswer" : [ "Andalucia", "Anaconda", "Andypandy", "Annerobinson" ],
    "questionTrueAnswer" : "B",

},

{
    "questionText" : "Which of these might be used in underwater naval operations?",
    "questionAnswer" : [ "Frogmen", "Newtmen", "Toadmen", "Tadpolemen" ],
    "questionTrueAnswer" : "A",

},

{
    "questionText" : "What are you said to do to a habit when you break it?",
    "questionAnswer" : [ "Throw it", "Punch it", "Kick it", "Eat it" ],
    "questionTrueAnswer" : "C",

},

{ 
    "questionText" : "What might an electrician lay?", 
    "questionAnswer" : [ "Tables", "Gables", "Cables", "Stables" ], 
    "questionTrueAnswer" : "C", 

},
{ 
    "questionText" : "Which colour is used as a term to describe an illegal market inrare goods?", 
    "questionAnswer" : [ "Blue", "Red", "Black", "White" ], 
    "questionTrueAnswer" : "C", 

},
{ 
    "questionText" : "Which of these would a film actor like to receive?", 
    "questionAnswer" : [ "Oliver", "Oscar", "Oliphant", "Osbert" ], 
    "questionTrueAnswer" : "B", 
},

    ];


    var answerId = [ "answerOne", "answerTwo", "answerThree", "answerFour" ];

    var scoreTable = [ "100","200","300","500","1000","2000","4000","8000","16000","32000",
    "64000","125000","250000","500000","1000000"]





    var questionNumber = 1;
    var score = 0;

    window.onload = function gamePlay () {
        createTableScore();
        printQuestion();
    }

function createTableScore() {
    var ul = document.getElementById("ulId");
    var li = document.createElement("li");
    for (var i=scoreTable.length-1; i>=0; i--){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("$" + scoreTable[i]))
            ul.appendChild(li);
    }
}

function printQuestion() {
    document.getElementById("question").innerHTML = questionNumber + ") " + questions[questionNumber-1].questionText;
    for (var i=0; i<4; i++) {
        document.getElementById(answerId[i]).innerHTML = questions[questionNumber-1].questionAnswer[i];
    }

}

function answerVariant(answerVar) {
    var answerV=answerVar;
    console.log(answerV);
    if (answerV == questions[questionNumber-1].questionTrueAnswer)
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
