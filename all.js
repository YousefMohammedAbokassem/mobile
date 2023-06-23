// start tilt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 20,
  speed: 400,
});
// end tilt
let menu = document.querySelector(".menu");
let firstMenu = document.querySelector(".menu .first");
let secondMenu = document.querySelector(".menu .second");
let thirdMenu = document.querySelector(".menu .third");
let bool = true;
let secondList = document.querySelector(".secondList");
menu.addEventListener("click", () => {
  if (bool) {
    firstMenu.style.cssText = "transform:rotate(45deg)";
    secondMenu.style.cssText = "opacity:0;";
    thirdMenu.style.cssText = "transform:rotate(-45deg)";
    bool = !bool;
    secondList.style.cssText = "opacity:1;pointer-events:auto;";
  } else {
    firstMenu.style.cssText = "transform:rotate(0deg)";
    secondMenu.style.cssText = "opacity:1;";
    thirdMenu.style.cssText = "transform:rotate(0deg)";
    bool = !bool;
    secondList.style.cssText = "opacity:0;pointer-events:none;";
  }
});
// end navigation
// start goUp
let goUp = document.querySelector(".goUp");
window.onscroll = () => {
  if (window.scrollY >= 800) {
    goUp.style.cssText = "opacity:1; bottom: 20px; pointer-events:auto;";
  } else {
    goUp.style.cssText = "opacity:0; bottom: 10px; pointer-events:none;";
  }
};
goUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// End goUp
// start option
let show = document.querySelector(".show");
let opSpans = document.querySelectorAll(".opSpan");
let color1 = localStorage.getItem("color1"); //#fff
let color2 = localStorage.getItem("color2");
if (color1 !== null) {
  // way number 1
  // opSpans.forEach((span) => {
  //   span.classList.remove("actSpan");
  //   document.documentElement.style.setProperty("--bg-color", color1);
  //   document.documentElement.style.setProperty("--text-color", color2);
  //   if (color1 == span.dataset.color1) {
  //     span.classList.add("actSpan");
  //   }
  // });
  // way number 2
  opSpans.forEach((span) => {
    if (color1 == span.dataset.color1) {
      // window.onload =function(){
      //     span.click();
      // }
      // click the point after page complete load
      document.addEventListener("DOMContentLoaded", () => {
        span.click();
      });
    }
  });
}
opSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    // remove class active from all spans
    opSpans.forEach((ele) => {
      ele.classList.remove("actSpan");
    });
    // add class active to the target
    e.target.classList.add("actSpan");
    // add data-color to the local storage
    localStorage.setItem("color1", e.target.dataset.color1);
    localStorage.setItem("color2", e.target.dataset.color2);
    // add the colors directly to the page
    document.documentElement.style.setProperty(
      "--bg-color",
      e.target.dataset.color1
    );
    document.documentElement.style.setProperty(
      "--text-color",
      e.target.dataset.color2
    );
  });
});
// hide and show the option
show.addEventListener("click", (e) => {
  show.parentElement.classList.toggle("goLeft");
  show.children[0].classList.toggle('fa-spin')
});
// end option
