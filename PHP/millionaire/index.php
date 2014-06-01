<!DOCTYPE html>
<html>
    <head>
        <title>millionaire!</title>
        <script src="js/functional.js"></script>

        <link rel="stylesheet" href="css/style.css">
    </head>

    <body>
        <div id="parent">
            <div id="menu"><p>Hi</p></div>

            <div id="nameUser">
                <input type="text" id="input"/>
                <button type="button" id="button">name</button>
            </div>
            
            <div id="beforeGame">
                <div id="timeAndUserName"> 
                    
                </div>

                <img id="imageMilionaire"src="images/millionaire.png">
                <div id="scoreBoard">
                    <ol id="ulId" reversed>
                    </ol>
                </div>
                <div id="questionAndAnswer">
                <div><p id="question"> 
                    <?php
                        
                    ?>
                </p></div>

                <span id="answer">
                    <!--  How to take the first <p> tag?  -->
                    <!-- <a data-id="A" class="answerVariant">A. <p id="answerOne"></p></a>
                    <a data-id="B" class="answerVariant">B. <p id="answerTwo"></p></a>
                    <a data-id="C" class="answerVariant">C. <p id="answerThree"></p></a>
                    <a data-id="D" class="answerVariant">D. <p id="answerFour"></p></a>-->

                    <div id="A" onclick="answerVariant('A')"> <p class="answerConst"> A. </p> <p id="answerOne"></p></div>
                    <div id="B" onclick="answerVariant('B')"> <p class="answerConst"> B. </p> <p id="answerTwo"></p></div>
                    <div id="C" onclick="answerVariant('C')"> <p class="answerConst"> C. </p> <p id="answerThree"></p></div>
                    <div id="D" onclick="answerVariant('D')"> <p class="answerConst"> D. </p> <p id="answerFour"></p></div>
                </span>
            </div>
            </div>
        </div>
    </body>
</html>
