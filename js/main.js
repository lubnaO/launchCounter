let countDown = function(){
    let Enddate = new Date("March 30, 2026").getTime();
    let TodayDate = new Date().getTime();
    let difference = Enddate - TodayDate;
    console.log(difference);
    let seconds = 1000;
    let mins = seconds*60;
    let hours = mins*60;
    let days = hours *24;
    // console.log(days);

    let timeDays = Math.floor(difference / days);
     let timeHours = Math.floor((difference % days) / hours);
     let timeMins = Math.floor((difference % hours) / mins);
     let timeSecond = Math.floor((difference % mins) / seconds);
   
     timeHours = timeHours < 10 ? '0' + timeHours : timeHours;
     timeMins = timeMins < 10 ? '0' + timeMins : timeMins;
     timeSecond = timeSecond < 10 ? '0' + timeSecond : timeSecond;

   document.querySelector('.day-box').innerHTML = timeDays;
   document.querySelector('.hour-box').innerHTML = timeHours;
   document.querySelector('.mins-box').innerHTML = timeMins;
   document.querySelector('.second-box').innerHTML = timeSecond;

    // console.log(timeDays);
}
countDown();
setInterval(countDown, 1000);
// console.log(Date.now());

// let m = new Date().getTime();
// console.log(m);
// console.log(Date.now());