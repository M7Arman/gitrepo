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

    var scoreTable = [ "1000000","500000","250000","125000","64000","32000","16000","8000","4000","2000",
    "1000","500","300","200","100"]

    var questionNumber = 1;
    var score = 0;
    var constScore = 0;

/////////////////////delete Element function//////////////////////////////////
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////



    window.onload = function inputName () {
    
    var buttonId = document.getElementById("button");
    var parentId = document.getElementById("parent");
    var nameUserId = document.getElementById("nameUser");
    var beforeGameId = document.getElementById("beforeGame");
    
    buttonId.onclick = function () {
        
    var userName = document.getElementById("input").value;
        console.log(userName);

        nameUserId.remove();
        beforeGameId.id = "game";
        gamePlay();
    }

    }
    
    function gamePlay () {
        createTableScore();
        printQuestion();
    }

function createTableScore() {
    var ol = document.getElementById("ulId");
    var li = document.createElement("li");
    for (var i = 0; i < scoreTable.length; i++){
       // setAttribute("class","liClass");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("$ " + scoreTable[i]))
            ol.appendChild(li);
    }
}

  //sa veradardzni createTableScore class-i element aysinqn` getLi() senc mi function
//createTableScore.prototype.


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
    score = scoreTable[questionNumber-1];
    console.log(score);
    questionNumber++;
    printQuestion();
}

function falseAnswer() {
    alert("GameOver");
    document.location.reload(true);
}
