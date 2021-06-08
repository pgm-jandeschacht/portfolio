// import VanillaTilt from './vanilla-tilt.js';

console.log('hey');

// When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }

// const element = document.querySelector(".js-tilt");
// VanillaTilt.init(element);
// element.addEventListener("tiltChange", callback);

// console.log(element)

const $test = document.querySelector('.scroll__container');

$test.addEventListener('click', ev => {
  ev.preventDefault();
  let scrollDistance = document.documentElement.clientHeight;
  window.scrollBy(0, scrollDistance);
});

var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
console.log(newurl)



const links = document.querySelectorAll('.nav__container__list__item a');
const sections = document.querySelectorAll('.linking');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');

}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

var refresh = performance.navigation.type

if(refresh === 1){
  if(window.location.href == 'http://localhost:8080/portfolio/#skills'){
    window.location.replace == "http://localhost:8080/portfolio/";
  }
}

console.log(location.href)
console.log(performance.navigation.type)

//check for Navigation Timing API support
// if (window.performance) {
//   console.info("window.performance works fine on this browser");
// }
// console.info(performance.navigation.type);
// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//   console.info( "This page is reloaded" );
// } else {
//   console.info( "This page is not reloaded");
// }
