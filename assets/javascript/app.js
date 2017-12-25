$("#start").on("click", function(){
    $(".hidden").css("display", "block");
    $("#start").css("display", "none");
    timer();
    return;
});

var correctAnswers = 0;
var incorrectAnswers = 0;

$("#done").on("click", function(){
    gameOver();
});

function gameOver(){    
    if(document.getElementById("correctQ1").checked){
        correctAnswers++;
    }else{
        incorrectAnswers++;
    };
    if(document.getElementById("correctQ2").checked){
        correctAnswers++;
    }else{
        incorrectAnswers++;
    };
    if(document.getElementById("correctQ3").checked){
        correctAnswers++;
    }else{
        incorrectAnswers++;
    };
    if(document.getElementById("correctQ4").checked){
        correctAnswers++;
    }else{
        incorrectAnswers++;
    };
    if(document.getElementById("correctQ5").checked){
        correctAnswers++;
    }else{
        incorrectAnswers++;
    };
    $("#incorrect").append(incorrectAnswers);
    $("#correct").append(correctAnswers);               
    $(".done").css("display", "block");
    $(".hidden").css("display", "none");
};

$("#restart").on("click", function(){
    location.reload();
});

function timer(){
    document.getElementById("timer").innerHTML = 2 + ":" + 00;
    startTimer();
};

function startTimer() {
    var presentTime = document.getElementById("timer").innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var minutes = timeArray[0];
    var seconds = checkSecond((timeArray[1] - 1));
    if(seconds==59){
        minutes=minutes-1
    }

    document.getElementById("timer").innerHTML =
    minutes + ":" + seconds;
    var timeOut = setTimeout(startTimer, 1000);

    // for(i = 0; i < ; i++){
    //     if($("#timer") === "0:00"){
    //         console.log("done")
    //         gameOver();
    //     };
    // }
};

function checkSecond(sec) {
    if (sec < 10 && sec >= 0){
        sec = "0" + sec
    };
    if (sec < 0){
        sec = "59"
    };
    return sec;
};





