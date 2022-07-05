const left__button = document.querySelector(".navigation__left");
const right__button = document.querySelector(".navigation__right");
let icon__bar = document.querySelector(
  ".center .section__profile__user__icons"
);
const center__grid = document.querySelector(".center");
const grid__children = document.querySelector(".section__profile").children;
const slider__container = [...grid__children];
const center__index = slider__container.indexOf(center__grid);
for (let i = center__index + 5; i < slider__container.length; i++) {
  if (slider__container[i]) {
    slider__container[i].style.display = "none";
  }
}
const slideRight = () => {
  const center__grid = document.querySelector(".center");
  const grid__children = document.querySelector(".section__profile").children;
  const slider__container = [...grid__children];
  const nextSibling = document.querySelector(".center").nextElementSibling;
  const center__index = slider__container.indexOf(center__grid);
  for (let i = 0; i <= center__index - 4; i++) {
    center__grid.style.animation = "slideCentertoLeft 0.65s ease-in";
    nextSibling.style.animation = "addNewCenter 0.65s ease-in";
    slider__container.forEach((el) => {
      if (el !== center__grid && el !== nextSibling) {
        el.style.animation = "slidetoLeft 0.65s ease-in";
      }
    });
    setTimeout(() => {
      for (let i = center__index; i <= center__index + 5; i++) {
        if (slider__container[center__index + 5]) {
          slider__container[center__index + 5].style.display = "flex";
        }
      }

      slider__container[i].style.display = "none";
      center__grid.classList.remove("center");
      slider__container.forEach((el) => {
        el.style.animation = null;
      });
    }, 400);
  }
  if (nextSibling) {
    setTimeout(() => {
      icon__bar.removeEventListener("mouseover", handleDetails);
      nextSibling.classList.add("center");
      const centerEle = nextSibling.classList.add("center");
      console.log(centerEle);
      icon__bar = document.querySelector(
        ".center .section__profile__user__icons"
      );
      icon__bar.addEventListener("mouseover", handleDetails);
    }, 400);
  }
};
const slideLeft = () => {
  const center__grid = document.querySelector(".center");

  let grid__children = document.querySelector(".section__profile").children;
  let slider__container = [...grid__children];
  const center__index = slider__container.indexOf(center__grid);
  const number_of_left_container = center__index;
  if (number_of_left_container <= 4) {
    slider__container[slider__container.length - 1].style.display = "none";
    document
      .querySelector(".section__profile")
      .insertAdjacentElement(
        "afterbegin",
        slider__container[slider__container.length - 1]
      );
  }
  grid__children = document.querySelector(".section__profile").children;
  slider__container = [...grid__children];
  const previousSibling =
    document.querySelector(".center").previousElementSibling;
  for (let j = 1; j <= 1; j++) {
    center__grid.style.animation = "slideCentertoRight 0.65s ease-in";
    previousSibling.style.animation = "addNewCentertoRight 0.65s ease-in";
    slider__container.forEach((el) => {
      if (el !== center__grid && el !== previousSibling) {
        el.style.animation = "slidetoRight 0.65s ease-in";
      }
    });
    setTimeout(() => {
      const initial = center__index == 4 ? 4 : 5;
      if (slider__container[center__index + 5])
        slider__container[center__index + 5].style.display = "none";
      for (let k = center__index - initial; k <= center__index; k++) {
        slider__container[k].style.display = "flex";
      }
      center__grid.classList.remove("center");
      slider__container.forEach((el) => {
        el.style.animation = null;
      }, 400);
    }, 400);
  }
  if (previousSibling) {
    setTimeout(() => {
      previousSibling.classList.add("center");
      icon__bar.removeEventListener("mouseover", handleDetails);
      icon__bar = document.querySelector(
        ".center .section__profile__user__icons"
      );

      icon__bar.addEventListener("mouseover", handleDetails);
    }, 400);
  }
};
left__button.addEventListener("click", slideRight);
right__button.addEventListener("click", slideLeft);
icon__bar.addEventListener("mouseover", handleDetails);
function handleDetails(e) {
  const current__Button = e.target.closest(".icon__button");
  if (current__Button) {
    const hook = e.target.closest("a").getAttribute("href");
    const icons = e.target.closest(".section__profile__user__icons").children;
    const allIcons = document.querySelectorAll(".icon");
    [...icons].forEach((el) => {
      const icon = el.children[0].children[0];
      icon.style.fill = "rgb(185, 180, 180)";
      icon.style.border = "none";
    });
    const svg_icon = [...current__Button.children][0];
    svg_icon.style.fill = "white";
    svg_icon.style.borderBottom = "0.2rem solid #7ed56f";
    const user__detail__box = e.target.closest(
      ".section__profile__user__icons"
    ).previousElementSibling;
    user__detail__box
      .querySelector(".section__profile__user__detail .active")
      .classList.remove("active");
    user__detail__box.querySelector(hook).classList.add("active");
  }
}
