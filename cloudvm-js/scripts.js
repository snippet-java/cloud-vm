function openNav() {
    document.getElementById("myNav").style.width = "30%";

    document.getElementById("body").style.background = "#0b161d";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("body").style.background = "white";
}

var timeRemaining;
var initialTime = 300;
var play;
var extend;
var finish;
var counter;

window.onload = function () {
    timeRemaining = initialTime; 
    play = 0;
    extend = 0;
    display = document.querySelector('#time');
    document.getElementById('time').innerHTML = '5:00';
};

function openNav() {
    document.getElementById("myNav").style.width = "30%";

    document.getElementById("body").style.background = "#0b161d";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("body").style.background = "white";
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    counter = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) { timer = duration;}
        }, 1000);
}

function run(){
    finish = setInterval(endOfTime, timeRemaining*1000);
    
    if(play == 0){
        display = document.querySelector('#time');
        startTimer(timeRemaining, display); 
        play = 1;
        
    }
}

function extendTime(){
    if(extend == 1){
         alert("You have already extended time.");
    }
    
    if(extend == 0){
        if(play == 0){
            timeRemaining = initialTime;
        }
        else{
            timeRemaining = display.textContent;   
             
        }
        
        if(timeRemaining == initialTime){
            timeRemaining = 420;
            if(play == 0){
                document.getElementById('time').innerHTML = '7:00';                
            }
            else{
                startTimer(timeRemaining, display);  
            }
        }
        else{
        
            }
        if(timeRemaining == "00:00"){
            startTimer(120, display);  
        }
        else{
           
        }
        extend = 1;
    }
    
}
    
    function endOfTime(){
        clearInterval(finish);
        clearInterval(counter);
        document.getElementById('time').innerHTML = '0:00';
    }


