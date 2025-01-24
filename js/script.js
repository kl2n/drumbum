(function($) {
    $(document).on('click', '.down-arrow', () => {
       //evt.preventDefault();
 
       const targetId = $(this).attr('href'); 
       const targetElement = $(targetId);
 
       if (targetElement.length) {
          $('html, body').animate({
             scrollTop: targetElement.offset().top // Scroll to the element
          }, 100, 
          /*
          function() {
             history.replaceState(null, null, ' ');
          }
             */
        );
       }
    });
 })(window.jQuery);

 
//Menu slide in and slide out
const menu = document.getElementById("menu");
const navBar = document.getElementById("navbar");
const menuItems = document.querySelectorAll(".nav-menu ul li a");

menu.addEventListener("click", () => {
   menu.classList.toggle("visible");
   navBar.classList.toggle("sideMenu");
});

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("visible"); 
        navBar.classList.remove("sideMenu");
    });
});

$(function() {
    let eventDate = moment().add(3, 'day').add(1, 'months');
    let day = eventDate.format("DD");
    let month = eventDate.format("MM");
    let year = eventDate.format("YYYY");
    document.getElementById('event-day').innerText = day;
    document.getElementById('event-month').innerText = month;
    document.getElementById('event-year').innerText = year;
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
     }
     //Loop End
     if (n < 1) {
         slidePosition = slides.length;

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





