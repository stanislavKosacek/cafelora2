import './style.css';

const navElm = document.querySelector('nav');
document.querySelector('#nav-btn').addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

const navItems = navElm.querySelectorAll('a');

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navElm.classList.add('nav-closed');
  });
});

const orderBtn = document.querySelector('.order-btn');
let ordered = false;

orderBtn.addEventListener('click', () => {
  const drinkCupElm = document.querySelector('.drink__cup');
  ordered = !ordered;
  if (ordered) {
    drinkCupElm.classList.remove('drink__cup--selected');
    orderBtn.textContent = 'Objednat';
  } else {
    drinkCupElm.classList.add('drink__cup--selected');
    orderBtn.textContent = 'Zrušit';
  }
});
