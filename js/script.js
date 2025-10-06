let navigation__button = document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".body");
let nextColorName = document.querySelector(".js-nextColorName");

navigation__button.addEventListener("click", () => {
  body.classList.toggle("body--colorLime");

  nextColorName.innerText = body.classList.contains("body--colorLime")
    ? "miodowy"
    : "limonkowy";
});
