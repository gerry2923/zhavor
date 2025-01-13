import Card from 'Card.js';


// Step I - hide content      
let classToHide = 'hide';
let hideFlag = true;
let avalibleNumberOfItems = 4;
//const itemList = document.querySelectorAll('#ltBlock2092179962 .lt-tsr-block.flex-column');
const classListToHide = ['subheader','header', 'description', 'button'];
// list of all images which are static (no hide-show)
let picList = document.querySelectorAll('#ltBlock2092179962 .image-card');
// list fo all cards
let allElemOfClubs = document.querySelectorAll('#ltBlock2092179962 .lt-tsr-block.flex-column *');
let wasResized = false;

// check if there are any elements contain classes from classListToHide list
// return true, if contain and false - if not
function isTargetElement(elem) {
   let counter = 0;   
   for (let item of classListToHide) {
      if(elem.classList.contains(item)) {
         counter++;
      } 
   }
   return counter ? true:false;

}

// check if elements to hide contain class hide. if so - remove it
// if not - add it

function isClicked(event) {
   hideContent(allElemOfClubs,classListToHide);
   let elemParent = event.target.parentElement;
    console.log(elemParent);
      for( let child of elemParent.children) {
        if(isTargetElement(child)) {
         child.classList.remove(classToHide);
        } 
      }
}
    
// hide content and add eventListener for click after loading page
function hideContent(elemToCheck, classListToHide) {
   for (let child of elemToCheck) {
       for (let nameClass of classListToHide){
           if(child.classList.contains(nameClass)){
               if(!child.classList.contains(classToHide)) {
                 child.classList.add(classToHide);
               }
           }
       }
   }         
}

function hideCollectionElemenst() {
   if(itemList.length > avalibleNumberOfItems){
      for(let i = avalibleNumberOfItems; i< itemList.length; i++) {
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

function removePicClickEvent() {
      for (let pic of picList) {
        pic.removeEventListener("pointerdown", isClicked);
      }
  }

function hideCardText(elements, hideClassList, picList) {
    hideContent(elements, hideClassList);
    setPicClickEvent(picList);   
}
// ---------------------------------
function showContent(elemToCheck, classListToHide) {
      for (let child of elemToCheck) {
       for (let nameClass of classListToHide){
           if(child.classList.contains(nameClass)){
               if(child.classList.contains(classToHide)) {
                 child.classList.remove(classToHide);
               }
           }
       }
   }  
} 
// 
function checkMediaQuery() {
    console.log(window.innerWidth);
    if (window.innerWidth < 599) {
        ufterLoadSetUp(); 
    } else {
        if(wasResized) {
            removePicClickEvent();
            showContent(allElemOfClubs,classListToHide);
        }
    }
  }

//--------------------------------------------
function ufterLoadSetUp() {
    if (window.innerWidth < 599) {
       hideCardText(allElemOfClubs,classListToHide,picList);
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
/***********************/	
// Step IIШ - hide card's description if resize window

