import { Layer } from './../Layer/index';
import './style.css';

export const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');

  let resultHtml = `
  <div class="drink__product">
    <div class="drink__cup">
      <img src="/assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info">
      <h3>${props.name}</h3>
  `;

  props.layers.forEach((layer) => {
    resultHtml += Layer(layer);
  });

  resultHtml += `
  
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>
  `;

  drinkElm.innerHTML = resultHtml;

  const orderBtn = drinkElm.querySelector('.order-btn');

  orderBtn.addEventListener('click', () => {
    const drinkCupElm = drinkElm.querySelector('.drink__cup');
    props.ordered = !props.ordered;
    if (props.ordered) {
      drinkCupElm.classList.remove('drink__cup--selected');
      orderBtn.textContent = 'Objednat';
    } else {
      drinkCupElm.classList.add('drink__cup--selected');
      orderBtn.textContent = 'Zrušit';
    }
  });

  return drinkElm;
};
