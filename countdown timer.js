var timeleft = 10;

// global variables for reference
var downloadTimer;

function startInterval() {  // everything inside this function that is called with click on button
  downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + "&nbsp";

    timeleft -= 1;
    if(timeleft <= -1){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Bast off!"
    }
  }, 1000);
}
// logic for audio to play and pause
function playMyAudio(){
    document.getElementById("myAudio").play();
   document.getElementById("audioStatus").innerHTML="Audio is Playing";	 
   
  }
  function pauseMyAudio(){
    document.getElementById("myAudio").pause();
   document.getElementById("audioStatus").innerHTML="Audio Paused";	
  }
