var hourText = document.getElementById("hour");
var minuteText = document.getElementById("minute");
var secondText = document.getElementById("second");
var ampm = document.getElementById("ampm");
var image = document.getElementById("image");
var gA = document.getElementById("gA");
var gE = document.getElementById("gE");
var gM = document.getElementById("gM");
var gN = document.getElementById("gN");
var box2_text = document.getElementById("box2-text");
var setAlarm = document.getElementById("setAlarm");
var box1_text = document.getElementById("box1-text");

setAlarm.onmouseover = function () {
  setAlarm.innerHTML = "Party time!";
};

setAlarm.onmouseout = function () {
  setAlarm.innerHTML = "Set Alarm";
};

setInterval(() => {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  if (hour >= 12) {
    ampm.innerHTML = "PM";
  } else {
    ampm.innerHTML = "AM";
  }

  if (minute < 10) {
    minuteText.innerHTML = "0" + minute;
  } else {
    minuteText.innerHTML = minute;
  }
  if (second < 10) {
    secondText.innerHTML = "0" + second;
  } else {
    secondText.innerHTML = second;
  }

  if (hour > 12) {
    hourText.innerHTML = hour - 12;
    box2_text.innerHTML = "let's have some lunch !!";
    box1_text.innerHTML = "good afternoon !! take some sleep";
    image.src = gA.src;
  }

  if (hour - 12 < 10 && hour > 0) {
    hourText.innerHTML = "0" + (hour - 12);
  }

  if (hour >= 8) {
    box2_text.innerHTML = "grab some healthy breakfast!!!";
    box1_text.innerHTML = "good morning!! wake up !!";
    image.src = gM.src;
  }

  if (hour >= 16) {
    box2_text.innerHTML = "stop yawning, get some tea... its just evening!";
    box1_text.innerHTML = "good evening !!";
    image.src = gE.src;
  }

  if (hour >= 20) {
    box2_text.innerHTML = "close your eyes and go to sleep";
    box1_text.innerHTML = "good night !!";
    image.src = gN.src;
  }
}, 1000);
