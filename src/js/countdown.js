/**
 * Created 2025
 * Peter Brumbach
 * 
 * Counts down the days until Christmas
 */

document.addEventListener("DOMContentLoaded", () => {
    countMain();
});

// Global Access Nodes
const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let days;
let hours;
let minutes;
let seconds;

// Startup counting
async function countMain() {
    days = document.getElementById("days");
    hours = document.getElementById("hours");
    minutes = document.getElementById("minutes");
    seconds = document.getElementById("seconds");
    const weekday = document.getElementById("weekday");
    const christmas = new Date();
    const current = new Date();
    christmas.setFullYear(current.getFullYear(), 11, 25);
    christmas.setHours(0);
    christmas.setMinutes(0);
    christmas.setSeconds(0);
    christmas.setMilliseconds(0);
    weekday.innerText = "Christmas is on a "+dayOfWeek[christmas.getDay()]+" this year!";
    countdown(christmas);
    setInterval(()=>{
        countdown(christmas);
    }, 500)
}

async function countdown(christmas) {
    let current = new Date();
    let timeDifference = Math.floor((christmas.getTime() - current.getTime())/1000);
    if (timeDifference <= 0) {
        if (timeDifference === 0) {
            location.reload();
        }
        christmas.setFullYear(current.getFullYear+1)
    }

    const numDays = Math.floor(timeDifference/86400);
    days.innerText = numDays;
    timeDifference -= numDays*86400;

    const numHours = Math.floor(timeDifference/3600);
    hours.innerText = numHours;
    timeDifference -= numHours*3600;

    const numMinutes = Math.floor(timeDifference/60);
    minutes.innerText = numMinutes;
    timeDifference -= numMinutes*60;

    seconds.innerText = timeDifference;
}