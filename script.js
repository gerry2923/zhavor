togglerStick = document.querySelector('#ltBlock2128608155 .toggler .fa.fa-bars');

function menuBtnClicked(event) {
  brg = event.target;
  if (brg.classList.contains("btn-on")) {
    brg.classList.remove("btn-on");
  } else {
    brg.classList.add("btn-on");
  }
}

togglerStick.addEventListener('pointerdown', menuBtnClicked);