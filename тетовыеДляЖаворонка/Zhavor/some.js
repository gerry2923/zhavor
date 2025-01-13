
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