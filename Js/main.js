let bars = document.querySelector('.our-bars')
let links = document.querySelector('.links')

bars.addEventListener('click',function(){
  links.classList.toggle('active')
})