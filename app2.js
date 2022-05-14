
document.querySelector("#btnClock").onclick = function(){
    var mainPart = document.querySelector("#main");  //for covering body area of watch
    mainPart.innerHTML = ""; //removing content from body area

    var clockContainer = document.createElement("div");//create div for assigning text
    clockContainer.id = "clock-container"; //give id to div
    clockContainer.innerHTML = `<h1 class="timer">
    <span id="minute">00</span>
    <span id="second">00</span>
    <span id="milli-second">00</span>
    </h1>
    <div id = "clock-icons">
        <a id="reset"><i class="fa fa-refresh" aria-hidden="true"></i></a>
        <a id="start"><i class="fas fa-square-full" aria-hidden="true"></i></a>
        <a id="stop"><i class="fa fa-pause"></i></a>
    </div>`;

    mainPart.appendChild(clockContainer);//append to main part

    var count = 0;
    var minutes = 0;
    var interval = 0;
    var milliseconds = 0;
    var seconds = 0;
    var timerRunning =false;
//write function for start Timer
    const startTimer  = () =>
    {
        count++;
        minutes = Math.floor(count/100/60);
        seconds = Math.floor(count/100-minutes*60);
        milliseconds = Math.floor(count-seconds*100-minutes*6000);

        document.querySelector("#minute").innerText = loadingzero(minutes);
        document.querySelector("#second").innerText = loadingzero(seconds);
        document.querySelector("#milli-second").innerText = loadingzero(milliseconds);
    } 

    // loading zero

  const loadingzero = (time) => {
    if (time <= 9) {
      return "0" + time;
    } else {
      return time;
    }
  };
    
    // when user clicking on start icon

  const start = document.querySelector("#start");
  start.addEventListener("click", function () {
    if (!timerRunning) {
      interval = setInterval(startTimer, 10); // start the timer
      timerRunning = true;
    }
  });

  // when user clicking on stop icon 
  const stop = document.querySelector("#stop");
  stop.addEventListener("click", function () {
    clearInterval(interval);
  });
  
    // when user try to reset

  const reset = document.querySelector("#reset");
  reset.addEventListener("click", function () {
    clearInterval(interval);
     count = 0;
     minutes = 0;
     seconds = 0;
     interval = 0;
     milliseconds = 0;
     timerRunning = false;

    document.querySelector("#minute").innerText = "00";
    document.querySelector("#second").innerText = "00";
    document.querySelector("#milli-second").innerText = "00";
  });


}