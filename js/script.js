(function($) {
    $(document).on('click', '.down-arrow', function(evt) {
       evt.preventDefault(); // Prevent default hash behavior
 
       const targetId = $(this).attr('href'); // Get the href (e.g., #section1)
       const targetElement = $(targetId); // Target element
 
       if (targetElement.length) {
          $('html, body').animate({
             scrollTop: targetElement.offset().top // Scroll to the element
          }, 100, function() {
             // Remove hash from the URL after scrolling
             history.replaceState(null, null, ' ');
          });
       }
    });
 })(window.jQuery);


$(function() {
    let eventDate = moment().add(3, 'day').add(1, 'months');
    let day = eventDate.format("DD");
    let month = eventDate.format("MM");
    let year = eventDate.format("YYYY");
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
     let slides = document.getElementsByClassName("slide__wrapper");
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

