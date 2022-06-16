let countDownDate = new Date("Nov 07, 2022 00:01:00").getTime();

const myfunc = setInterval(function() {

const now = new Date().getTime();
const timeleft = countDownDate - now;
const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
document.getElementById("days").innerHTML = days + " dias"
document.getElementById("hours").innerHTML = hours + " horas" 
document.getElementById("mins").innerHTML = minutes + " minutos" 
document.getElementById("secs").innerHTML = seconds + " segundos" 
}, 1000);