{
  const welcome = () => {
    console.log("Hello everyone 😀");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const nextColorName = document.querySelector(".js-nextColorName");

    body.classList.toggle("body--colorGreen");

    nextColorName.innerText = body.classList.contains("body--colorGreen")
      ? "miodowy"
      : "zielony";
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
