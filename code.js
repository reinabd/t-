const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(` May 18 , 2026 00:00:00 
`);

// Update countdown time
function updateCountdown() {
const currentTime = new Date();
const diff = currentTime - newYearTime;

const y = Math.floor(diff / 1000 / 60 / 60/24/365.2428) ;
const mo = Math.floor(diff / 1000 / 60 / 60/24/365.2428 ) * 12 ;
const d = Math.floor(diff / 1000 / 60 / 60 /24) ;



years.innerHTML = y;

months.innerHTML = mo < 10 ? '0' + mo : mo;

days.innerHTML = d < 10 ? '0' + d : d;



}




setInterval(updateCountdown, 1000);
