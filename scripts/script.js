"use strict";

// interval
setInterval(() => {
  // get elements
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const ampm = document.getElementById("ampm");

  const hh = document.getElementById("hh");
  const mm = document.getElementById("mm");
  const ss = document.getElementById("ss");

  const hr_dot = document.getElementById("hr_dot");
  const min_dot = document.getElementById("min_dot");
  const sec_dot = document.getElementById("sec_dot");

  // functions
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  // convert 24hr is 12hr clock
  if (h > 12) {
    h = h - 12;
  }
  // add zeros after single digit number
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // innerHTML
  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";
  ampm.innerHTML = am;

  // 12 hrs clock
  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  // 60 minutes
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  // 60 seconds
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // 360 / 12 - 30
  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  // 360 / 60 - 6
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  // 360 / 60 - 6
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
});
