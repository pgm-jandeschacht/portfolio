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



if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  window.location.replace('http://localhost:8080/portfolio/')
}

const $year = document.querySelector('.year');

const getYear = () => {
  const date = new Date();
  const year = date.getFullYear();

  $year.innerHTML = year;
}

getYear();