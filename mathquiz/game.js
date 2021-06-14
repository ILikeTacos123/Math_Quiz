var player1_name = localStorage.getItem("player 1");
var player2_name = localStorage.getItem("player 2");

var player1_score = 0;
var player2_score = 0;

var number1, number2, actual_answer;
var question_number, input, button;
var answer;
var question_turn = "player1";
var answer_turn = "player2";

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = player1_name;
document.getElementById("player_answer").innerHTML = player2_name;

function send() {
    number1 = document.getElementById("no1").value;
    number2 = document.getElementById("no2").value;
    actual_answer = parseInt(number1) * parseInt(number2); 

    question_number = "<h4 id='number_questions'> Q. " + number1 + " x " + number2 + "</h4>";
    input = "<br> Answer : <input type='text' class='text_inputs' id='input_checkbox'>";
    button = "<br><br><button id='button_check' onclick='check()' class='btn btn-danger'>Check</button>";
    row = question_number + input + button;
    document.getElementById("output").style.visibility = "visible";
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number 1").value = "";
    document.getElementById("Number 2").value = "";
}

function check() {
    answer = document.getElementById("input_checkbox").value;
    console.log("Answer given by player is = " + answer);
    if (answer == actual_answer) {
        if (answer_turn == "player1"){
            player1_score ++;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score ++;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = player1_name;
    }

    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.visibility = "hidden";
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
}