let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

// Disable right-click context menu
document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
}, false);

const scriptURL = 'https://script.google.com/macros/s/AKfycbzuPjfXx1Sq8U3RAS6IERgTehomvyml5iU2VERxfbIZiMX-uEbkVvFrL6mKGrutJXra/exec'
const form = document.forms['submit-to-google-sheet']
const success = document.getElementById('success');
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        success.innerHTML="Submit Successfully";
        setTimeout(function()
    {
        success.innerHTML="Submit Successfully";
    },5000)
    form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.faq .accordion');

  accordions.forEach(accordion => {
    const heading = accordion.querySelector('.accordion-heading');

    heading.addEventListener('click', function() {
      // Toggle active class
      accordion.classList.toggle('active');

      // Close other accordions
      accordions.forEach(otherAccordion => {
        if (otherAccordion !== accordion) {
          otherAccordion.classList.remove('active');
          otherAccordion.querySelector('.accordion-content').style.display = 'none';
        }
      });

      // Toggle display of accordion content
      const content = accordion.querySelector('.accordion-content');
      if (accordion.classList.contains('active')) {
        content.style.display = 'block';
        // Scroll into view
        accordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        content.style.display = 'none';
      }
    });
  });
});


const appear = document.querySelector('.appear'); 
const cb = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io = new IntersectionObserver(cb);
io.observe(appear);



var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
