$(function() {
    //Event date for two months from now
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 2;
    let year = newDate.getFullYear();
    // console.log(day, month, year);
    document.getElementById('event-day').innerHTML = day;
    document.getElementById('event-month').innerHTML = month;
    document.getElementById('event-year').innerHTML = year;
});