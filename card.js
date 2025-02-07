// hide show element depend on widnow size;
let wasResized = false;
let titleMin = document.querySelectorAll("");

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