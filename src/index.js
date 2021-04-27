import { Drink } from './Drink/index';
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

const drinksListElm = document.querySelector('.drinks-list');
fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((result) => result.json())
  .then((json) => {
    json.forEach((drink) => {
      drinksListElm.appendChild(Drink(drink));
    });
  });
