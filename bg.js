const body = document.querySelector("body");

const IMG_NUMBER = 9; // 사진 갯수

function handleImgLoad() {
  body.prepend(image);
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `https://github.com/piemonte93/vanilla-javascript-app/blob/master/images/${
    imgNumber + 1
  }.JPG?raw=true`;
  image.classList.add("bgImage");
  image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
