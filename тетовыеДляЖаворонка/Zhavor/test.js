import Card from './Card.js';

let cardContainer = document.querySelector(".card__list");
let cardList = cardContainer.querySelectorAll('.card');

let hideClassName = "hide";
let cardHideClassNameList = cardContainer.querySelectorAll(".card__text");
let clickableElement = cardContainer.querySelector(".card__header");
let isResized = false;
let cardObjectList = [];


// прячем элементы и добавляем кликабельности картинке
function hideElementsInside() {
  cardObjectList.forEach( item => {
      item.addHideClass();
      item.setClickableElementEvent();
    }
  );  
}
function checkMediaQuery() {

  
}

function ufterLoadSetUp() {

  let card = new Card(cardList[0], cardHideClassNameList, hideClassName,clickableElement);
  console.log(card.getBaseElem());
  // cardList.forEach(cardObjectList.push(item => new Card(item, cardHideClassNameList, hideClassName, clickableElement)));

    if (window.innerWidth < 599) {
      // окно меньше 600, убираем часть контента
       hideElementsInside();
       isResized = true;
    } else {
        isResized = false;
    }
// 0. ставим обработчик на размер окна
window.addEventListener("resize", checkMediaQuery);
    
}

// 0. если документа загружен, ставим настройки после загрузки
if (document.readyState === "loading") {
  // если документ не загружен, добавляем обработчик загрузки и ждем
    document.addEventListener("DOMContentLoaded", ufterLoadSetUp);
} else {
   ufterLoadSetUp();
}
