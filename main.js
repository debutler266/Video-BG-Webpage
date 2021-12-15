// adding 2 classes of active on 'toggle & showcase' classes

//bring in toggle + showcase
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');


//run function on click to bring in toggle menu dynamically
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  showcase.classList.toggle('active')
});



//fixes video no playing on mobile devices for chrome/safri based on Apple update in 2018
document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  $("video").get(0).volume=0;
  $('video').attr('playsinline',true);
  $('video').attr('muted',"muted");
  $('video').get(0).play()
});
