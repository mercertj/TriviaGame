
var HTMLContent;
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

document.getElementById('timer').innerHTML =
  05 + ":" + 00;
startTimer();

function countDown(mins, secs) {
  var presentTime = document.getElementById("timer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){alert("Time's Up!")}
  
  document.getElementById("timer").innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}














