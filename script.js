/*jshint browser: true, devel: true, jquery: true*/
$(document).ready(function () {
    var beep = $("#beep-sound")[0];
    var hrs,
        min,
        sec;
    var pomodoroLength;
    var breakLength;
    var currentLength;
    var intervalId;
    var timerVal;
    var totalSecs;
    
    function setTimer() {
        totalSecs = 0;
        hrs = 0;
        min = 0;
        sec = 0;
        
        totalSecs = currentLength * 60 + 1;
        
        if (currentLength >= 60) {
            if (currentLength % 60 > 0) {
                min += currentLength % 60;
                currentLength -= min;
            }
            
            hrs = currentLength / 60;
        } else {
            min = currentLength;
        }
        
        if (min < 10) {
            timerVal = "0" + min + ":" + "0" + sec;
        } else {
            timerVal = min + ":" + "0" + sec;
        }

        if (hrs !== 0) {
            timerVal = hrs + ":" + timerVal;
        }
        
        $("#timer").text(timerVal);
        intervalId = setInterval(countDown, 1000);
    }
    
    function countDown () {
        totalSecs--;
        sec--;
        
        if (sec < 0) {
            min--;
            sec = 59;
        }

        if (min < 0) {
            hrs--;
            min = 59;
        }

        if (sec < 10) {
            timerVal = "0" + sec;
        } else {
            timerVal = sec;
        }

        if (min < 10) {
            timerVal = "0" + min + ":" + timerVal;
        } else {
            timerVal = min + ":" + timerVal;
        }

        if (hrs !== 0) {
            timerVal = hrs + ":" + timerVal;
        }
        
        $("#timer").text(timerVal);
        
        if (hrs === 0 && min === 0 && sec === 0) {
            beep.play();
        }
        
        if (totalSecs === 0) {
            resetTimer();
        }
    }
    
    function resetTimer () {
        clearInterval(intervalId);

        if ($("#timer-type").text() === "Pomodoro") {
            $("#timer-type").text("Break");
            currentLength = breakLength;
        } else {
            $("#timer-type").text("Pomodoro");
            currentLength = pomodoroLength;
        }

        setTimer();
    }
    
    $("#start-button").on("click", function () {
        pomodoroLength = $("#pomodoro-length").val();
        breakLength = $("#break-length").val();
        $("#config-area").addClass("hidden");
        $("#clock").removeClass("hidden");
        $("#timer-type").text("Pomodoro");
        currentLength = pomodoroLength;
        setTimer();
    });
    
    $("#pause-resume-button").on("click", function () {
        if ($(this).text() === "Pause") {
            clearInterval(intervalId);
            $(this).text("Resume");
        } else {
            intervalId = setInterval(countDown, 1000);
            $(this).text("Pause");
        }
    });

    $("#stop-button").on("click", function () {
        clearInterval(intervalId);

        if ($("#pause-resume-button").text() === "Resume") {
            $("#pause-resume-button").text("Pause");
        }

        $("#clock").addClass("hidden");
        $("#config-area").removeClass("hidden");
    });
    
    $("a, button").on("click", function () {
       this.blur(); 
    });
    
    $("input").on("keypress", function (event) {
        if (event.which < 48 && event.which !== 8 && event.which !== 0 && event.which !== 13|| event.which > 58) {
            return false;
        } else if (event.which === 13) {
            $("#start-button").click();
        }
    });
});