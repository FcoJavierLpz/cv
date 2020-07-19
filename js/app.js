const removeFadeOut = (el, speed) => {
  let seconds = speed / 500;
  el.style.transition = "opacity " + seconds + "s ease";
  el.style.opacity = 0;
  setTimeout(() => {
    el.parentNode.removeChild(el);
    document.querySelector(".container").removeAttribute("style");
  }, speed);
};
var lang = {
  html: "100%",
  css: "90%",
  javascript: "70%",
  php: "55%",
  angular: "65%",
  node: "75%",
  react: "85%",
  git: "80%",
};

var multiply = 4;

for (const [index, value] of Object.entries(lang)) {
  var delay = 700;
  setTimeout(function () {
    document.querySelector("#" + index + "-pourcent").innerHTML = value;
  }, delay * multiply);
  multiply++;
}

const loading = () => {
  let floorElements = document.getElementsByClassName(
    "spinner"
  );
  removeFadeOut(floorElements[0], 2500);
};

loading();