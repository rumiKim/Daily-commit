const width = window.innerWidth;
const body = document.querySelector("body");

function handleResize() {
  let bgColor;

  if (width < 800) {
    bgColor = "skyblue";
  } else if (width < 1200) {
    bgColor = "purple";
  } else {
    bgColor = "yellow";
  }

  body.style.backgroundColor = bgColor;
}

window.addEventListener("resize", handleResize);