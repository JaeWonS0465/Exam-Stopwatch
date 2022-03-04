var limit = prompt("Enter the time limit in minute",90);

document.getElementById("end-time").innerHTML = "";

var min = 0;
var sec = 0;
var ending = false;

let today = new Date();   
let hh = today.getHours(); // 시
let mm = today.getMinutes();  // 분
let ss = today.getSeconds();  // 초

hh = parseInt(hh)
mm = parseInt(mm) + parseInt(limit)
ss = parseInt(ss)




function Time() {
// Creating object of the Date class
var date = new Date();
// Get current hour
var hour = date.getHours();
// Get current minute
var minute = date.getMinutes();
// Get current second
var second = date.getSeconds();
// Variable to store AM / PM
var period = "";


// Assigning AM / PM according to the current hour
if (hour >= 12) {
period = "PM";
} else {
period = "AM";
}
// Converting the hour in 12-hour format
if (hour == 0) {
hour = 12;
} else {
if (hour > 12) {
hour = hour - 12;
}
}
// Updating hour, minute, and second
// if they are less than 10
hour = update(hour);
minute = update(minute);
second = update(second);
// Adding time elements to the div
document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
// Set Timer to 1 sec (1000 ms)
sec = parseInt(sec);
min = parseInt(min);

sec = sec + 1;

if (sec == 60) {
    min = min + 1;
    sec = 0;
}

if (sec < 10 || sec == 0) {
    sec = '0' + sec;
}
if (min < 10 || min == 0) {
    min = '0' + min;
}

setTimeout(Time, 1000);



while (mm >= 60) {
    mm = mm-60
    hh = parseInt(hh)+1
}
// Converting the hour in 12-hour format
if (hh == 0) {
hh = 12;
} else {
if (hh > 12) {
hh = hh - 12;
}
}

let h1 = (hh.toString()).length;
let m1 = (mm.toString()).length;
let s1 = (ss.toString()).length;

if (h1 < 2) {
    hh = '0'+hh
}
if (m1 < 2) {
    mm = '0'+mm
}
if (s1 < 2) {
    ss = '0'+ss
}
    



var time_left = parseInt(limit) - min;


if (limit != null || limit != NaN) {
    document.getElementById("end-time").innerText = "~ " + hh + " : " + mm + " : " + ss + " " + period;
    document.getElementById("time-left").innerText = "(" +time_left + "m left)";
}


if (ending == false && time_left == 0) {
    alert("TIME'S UP");
    ending = true
}

}



// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
if (t < 10) {
return "0" + t;
}
else {
return t;
}
}
Time();