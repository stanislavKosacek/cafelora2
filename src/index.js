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
drinksListElm.appendChild(
  Drink({
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  }),
);
