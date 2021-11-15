// adding 2 classes of active on 'toggle & showcase' classes

//bring in toggle + showcase
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');


//run function on click to bring in toggle menu dynamically
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  showcase.classList.toggle('active')
});
