export default class Card {
    _baseElement;
    _classListToHide  = [];
    _hideClass;
    _clickableClass;

    constructor(baseElement, hideClasses, hideClass, clickableClass) {

      this._baseElement = baseElement; // это сама карта
      this._classListToHide  = hideClasses; //  это ее подклассы, которые надо прятать
      this._hideClass = hideClass; // это класс, который прячет
      this._clickableClass = clickableClass; // на какой элемент надо нажать, чтобы показать весь контент карты
    }

    // 
    isTargetElement() {
      let counter = 0;   
      for (let item of this._classListToHide) {
         if(this._baseElement.classList.contains(item)) {
            counter++;
         } 
      }
      return counter ? true:false;
    }


    addHideClass() {
      for (className of this._classListToHide) {
        if(this._baseElement.classList.contains(className)) {
          if(!this._baseElement.classList.contains(this._hideClass)) {
            this._baseElement.classList.add(this._hideClass);
          }
        }
      }
    }

    removeHideClass(){
      for (className of this._classListToHide) {
        if(this._baseElement.classList.contains(className)) {
          if(this._baseElement.classList.contains(this._hideClass)) {
            this._baseElement.classList.remove(this._hideClass);
          }
        }
      }    
    }

    isClicked () {

    }

    getBaseElem () {
      return this._baseElement;
    }
    
    setClickableElementEvent() {
      let clicableElement = this._baseElement.querySelector(this._clickableClass);
      if(clicableElement) {
         clicableElement.addEventListener("poinerdown", this.isClicked);
      }
    }

  }


