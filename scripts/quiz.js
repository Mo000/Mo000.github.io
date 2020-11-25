//Displays the quiz box once the start button is pressed
function StartQuiz(){
    document.getElementById("quizStartButton").style.display = "none";
    document.getElementById("quiz").style.height = "auto";
    document.getElementById("quiz").style.opacity = "1";
}
var quizProgress = 1;
var score = 0;
var correctAnswer;
//Function is called when an answer button is pressed.
function QuizAnswer(ans){
    switch(quizProgress){
        case 1:
            //Sets the correct answer string and whether or not the correct answer has been chosen for each question
            correctAnswer = "4.01 Silent Study";
            if (ans == 1){
                QuizAnswered(true);
            }
            else{
                QuizAnswered(false);
            }
            break;
        case 2:
            correctAnswer = "4.02 Silent Study";
            if (ans == 3){
                QuizAnswered(true);
            }
            else{
                QuizAnswered(false);
            }
            break;
        case 3:
            correctAnswer = "4.26 Silent Study";
            if (ans == 2){
                QuizAnswered(true);
            }
            else{
                QuizAnswered(false);
            }
            break;
        case 4:
            correctAnswer = "4.17 Library Reference Collection";
            if (ans == 1){
                QuizAnswered(true);
            }
            else{
                QuizAnswered(false);
            }
            break;
        case 5:
            correctAnswer = "4.07 Silent Study";
            if (ans == 4){
                QuizAnswered(true);
            }
            else{
                QuizAnswered(false);
            }
            break;
        default:
            break;
    }
}
var feedbackCorrect = "Correct!";
var feedbackIncorrect ="Incorrect! The correct answer is ";
//Function is called when after a quiz answer is pressed.
function QuizAnswered(correct){
    //Disables all the quiz buttons
    for (i=0; i<document.getElementsByClassName("answer").length; i++){
        document.getElementsByClassName("answer")[i].disabled = true;
    }
    //Displays the feedback section & the next question button
    document.getElementById("feedback").style.height = "auto";
    document.getElementById("feedback").style.opacity = "1";
    //Displays "Correct" or "Incorrect" and the correct answer if incorrect
    if (correct == true){
        document.getElementById("quizFeedback").innerHTML = feedbackCorrect;
        document.getElementById("correctAnswer").innerHTML = "";
        score++;
    }
    else{
        document.getElementById("quizFeedback").innerHTML = feedbackIncorrect;
        document.getElementById("correctAnswer").innerHTML = correctAnswer;
    }
    //Once the 5th question has been answered, it displays the final score
    if (quizProgress == 5){
        document.getElementById("scoreFeedback").style.display = "block";
        document.getElementById("score").innerHTML = score;
        if (score == 0 || score == 1){
            document.getElementById("feedbackMessage").innerHTML = "Did you even try?";
        }
        else if(score == 5){
            document.getElementById("feedbackMessage").innerHTML = "Perfect!";
        }
        else{
            document.getElementById("feedbackMessage").innerHTML = "Well done!";
        }
    }
}
//Function is called when the "Next View" button is clicked
function QuizNext(){
    quizProgress++;
    //Hide the feedback section
    document.getElementById("feedback").style.height = "0";
    document.getElementById("feedback").style.opacity = "0";
    //Re-enable all of the answer buttons
    for (i=0; i<document.getElementsByClassName("answer").length; i++){
        document.getElementsByClassName("answer")[i].disabled = false;
    }
    document.getElementById("quizCurrentProgress").innerHTML = quizProgress;
    switch(quizProgress){
        //Sets the new image andanswer button values
        case 2:
            document.getElementById("quizImg").src = "img/4.02.png";
            document.getElementsByClassName("answer")[0].innerHTML = "4.03 Group Study";
            document.getElementsByClassName("answer")[1].innerHTML = "4.17 Library Reference Collection";
            document.getElementsByClassName("answer")[2].innerHTML = "4.02 Silent Study";
            document.getElementsByClassName("answer")[3].innerHTML = "4.17 Silent Study";
            break;
        case 3:
            document.getElementById("quizImg").src = "img/4.26.png";
            document.getElementsByClassName("answer")[0].innerHTML = "4.06 Group Study";
            document.getElementsByClassName("answer")[1].innerHTML = "4.26 Silent Study";
            document.getElementsByClassName("answer")[2].innerHTML = "4.03 Group Study Study";
            document.getElementsByClassName("answer")[3].innerHTML = "4.17 Library Reference Collection";
            break;
        case 4:
            document.getElementById("quizImg").src = "img/4.17.png";
            document.getElementsByClassName("answer")[0].innerHTML = "4.17 Library Reference Collection";
            document.getElementsByClassName("answer")[1].innerHTML = "4.03 Group Study";
            document.getElementsByClassName("answer")[2].innerHTML = "4.26 Silent Study";
            document.getElementsByClassName("answer")[3].innerHTML = "4.01 Silent Study";
            break;
        case 5:
            document.getElementById("quizImg").src = "img/4.07.png";
            document.getElementsByClassName("answer")[0].innerHTML = "4.23 Group Study";
            document.getElementsByClassName("answer")[1].innerHTML = "4.01 Silent Study";
            document.getElementsByClassName("answer")[2].innerHTML = "4.03 Group Study";
            document.getElementsByClassName("answer")[3].innerHTML = "4.07 Silent Study";
            //On the last question, hide the "Next" button
            document.getElementById("quizNext").style.display = "none";
            break;
    }
}