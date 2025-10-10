{
  const welcome = () => {
    console.log("Hello everyone 😀");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const nextColorName = document.querySelector(".js-nextColorName");

    body.classList.toggle("body--colorLime");

    nextColorName.innerText = body.classList.contains("body--colorLime")
      ? "miodowy"
      : "limonkowy";
  };

  const init = () => {
    const navigation__button = document.querySelector(
      ".js-changeBackgroundButton"
    );

    navigation__button.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}
