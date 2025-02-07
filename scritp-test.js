// Step I - hide content      
let classToHide = 'hide';
let hideFlag = true;
let avalibleNumberOfItems = 4;
const classListToHide = ['subheader', 'header', 'description', 'button'];
let picList = document.querySelectorAll('#ltBlock2092179962 .image-card');
let allElemOfClubs = document.querySelectorAll('#ltBlock2092179962 .lt-tsr-block.flex-column');
let wasResized = false;

// check if there are any elements contain classes from classListToHide list
// return true, if contain and false - if not
function isTargetElement(elem) {
  let counter = 0;
  for (let item of classListToHide) {
    if (elem.classList.contains(item)) {
      counter++;
    }
  }
  return counter ? true : false;

}

// check if elements to hide contain class hide. if so - remove it
// if not - add it

function isClicked(event) {
  hideContent(allElemOfClubs, classListToHide);
  let elemParent = event.target.parentElement;

  for (let child of elemParent.children) {
    if (isTargetElement(child)) {
      child.classList.remove(classToHide);
    }

  }
}

// hide content and add eventListener for click after loading page
function hideContent(element, classListToHide) {
  for (let childElem of element.children) {
    for (let innerChild of childElem.children) {
      for (let nameOfClass of classListToHide) {
        if (innerChild.classList.contains(nameOfClass)) {
          if (!innerChild.classList.contains(classToHide)) {
            innerChild.classList.add(classToHide);
          }
        }
      }
    }
  }
}

function hideCollectionElemenst() {
  if (itemList.length > avalibleNumberOfItems) {
    for (let i = avalibleNumberOfItems; i < itemList.length; i++) {
      itemList[i].classList.add(classToHide);
    }
  }
  hideFlag = true;
}

function setPicClickEvent(picList) {
  for (let pic of picList) {
    pic.addEventListener("pointerdown", isClicked);
  }
}

function removePicClickEvent(picList) {
  for (let pic of picList) {
    pic.removeEventListener("pointerdown", isClicked);
  }
}

function hideCardText(elements, hideClassList, picList) {

  for (let element of elements) {
    hideContent(element, hideClassList);
  }

  setPicClickEvent(picList);
}


function showContent(element, classListToHide) {
  for (let childElem of element.children) {
    for (let innerChild of childElem.children) {
      for (let nameOfClass of classListToHide) {
        if (innerChild.classList.contains(nameOfClass)) {
          if (innerChild.classList.contains(classToHide)) {
            innerChild.classList.remove(classToHide);
          }
        }
      }
    }
  }
}

function showCardContent(elements, classListToHide) {
  for (let element of elements) {
    showContent(element, classListToHide);
  }
}


function checkMediaQuery() {
  //   console.log(window.innerWidth);
  if (window.innerWidth < 599) {
    ufterLoadSetUp();
  } else {
    if (wasResized) {
      removePicClickEvent(picList);
      showCardContent(allElemOfClubs, classListToHide);
    }
  }
}


function ufterLoadSetUp() {
  if (window.innerWidth < 599) {
    hideCardText(allElemOfClubs, classListToHide, picList);
    wasResized = true;
  } else {
    wasResized = false;
  }
  window.addEventListener("resize", checkMediaQuery);

}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ufterLoadSetUp);
} else {
  ufterLoadSetUp();
}

/***********************/	
// Step II - hide active cards
//
let nbrVisibleCards = 3;
let isCollapsed = true;
let teamSectionPosition = document.getElementById('ltBlock2095560726');
let employeeContainer = document.getElementById('ltBlock2095639194');
let showMoreItemsBtn = document.querySelector('#ltBlock2113310555 .showMoreItems');
let employeeList = employeeContainer.querySelectorAll('.lt-tsr-block.flex-column');

// at the beginning
hideCards();

function getCoords(block) {
  let box = block.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

function scrollToSection(element) {
    let obj = getCoords(element);
    
    window.scroll({
    top: obj.top,
    left: obj.left,
    behavior: "smooth",
  });
}

function showCards() {
  for (let i = nbrVisibleCards; i < employeeList.length; i++) {
    // if(employeeList[i].classList.contains('hide')) {
    employeeList[i].classList.remove('hide');
    //}
  }
}

function hideCards() {
  for (let i = nbrVisibleCards; i < employeeList.length; i++) {
    //if(!employeeList[i].classList.contains('hide')) {
    employeeList[i].classList.add('hide');
    //}
  }
}

function toggleCards() {
 
  if (isCollapsed) {
    showCards();
    isCollapsed = false;
  } else {
    hideCards();
    isCollapsed = true;
    scrollToSection(teamSectionPosition);
  }

}


showMoreItemsBtn.addEventListener('pointerdown', toggleCards);
     // window.addEventListener("resize", changeNrActiveCards);
/*
     const collapseBtn = document.querySelector('.collapse');

     function showMore () {
        for(const item of itemList){
         if(item.classList.contains(classToHide)) {
            item.classList.remove(classToHide);
         }
        }

        hideFlag = false;
     }

     collapseBtn.addEventListener('pointerdown', showMore);


     // Получаем нужный элемент
      var cardContainer = document.querySelector('.card-g__container');

      var canSee = function (target) {
      // Все позиции элемента
         var targetPosition = {
               top: window.pageYOffset + target.getBoundingClientRect().top,
               left: window.pageXOffset + target.getBoundingClientRect().left,
               right: window.pageXOffset + target.getBoundingClientRect().right,
               bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
         windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
         };

         if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
               targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
               targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
               targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
               // Если элемент полностью видно, то запускаем следующий код
               console.clear();
               console.log('Вы видите элемент :)');
         } else {
               // Если элемент не видно, то запускаем этот код
           
            if(!hideFlag) {
               hideCollectionElemenst();
               console.clear();
            }
         };
      };

      // Запускаем функцию при прокрутке страницы
      window.addEventListener('scroll', function() {
         canSee(cardContainer);
      });
      
      
      
      let nbrVisibleCards = 4;
let isCollapsed = true;
let employeeContainer = document.getElementById('ltBlock2095639194');

let employeeList = employeeContainer.querySelectorAll('.lt-tsr-block.flex-column');

console.log(employeeList);

console.log(employeeList.length);

if(employeeList.length > nbrVisibleCards) {
    for (let i = nbrVisibleCards; i < employeeList.length; i++) {
        console.log(employeeList[i]);
        employeeList[i].classList.add("hide");
        console.log(employeeList.className);
    }
}

let showMoreItemsBtn = document.querySelector('#ltBlock2113310555 .showMoreItems');

function showHideCards() {
    if(isCollapsed){
        for (let i = nbrVisibleCards; i < employeeList.length; i ++){
            if(employeeList[i].class)
        }
    }
}

showMoreItemsBtn.addEventListener('pointerdown', showHideCards);

      // А также запустим функцию сразу. А то вдруг, элемент изначально видно
      canSee(cardContainer);*/