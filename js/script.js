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

 // Slideshow
 let slidePosition = 1;
 SlideShow(slidePosition);

 // Prev/Next buttons
 function plusSlides(n) {
     SlideShow(slidePosition += n);
 }

 // Counter
 function slideCounter(n) {
     SlideShow(slidePosition = n);
 }

 function SlideShow(n) {
     let slides = document.getElementsByClassName("slide");
     let pagers = document.getElementsByClassName("pager");
     // Loop Start
     if (n > slides.length) {
         slidePosition = 1;
         console.log("loop start");
     }
     //Loop End
     if (n < 1) {
         slidePosition = slides.length;
         console.log("loop end");

     }
     // Hide all slides and pager
     for (let i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     for (let i = 0; i < pagers.length; i++) {
         pagers[i].className = pagers[i].className.replace(" enable", "");
     }
     // Show current slide and pager
     slides[slidePosition-1].style.display = "block";
     pagers[slidePosition-1].className += " enable";
 } 