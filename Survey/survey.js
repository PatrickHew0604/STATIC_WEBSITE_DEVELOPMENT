// document.addEventListener("scroll", () => {
//   const header = document.querySelector(".header");
//   var position = window.scrollY;
//   if (position > 48) header.style.position = "fixed";
//   else header.style.position = "initial";
// });

const btnClear = document.querySelector("#btnClear");
// const btnSubmit = document.querySelector("#btnSubmit");
btnClear.addEventListener("click", () => {
  const allRad = document.querySelectorAll("input[type='radio']");
  const textArea = document.querySelector("#opinion");
  textArea.value = "";
  for (var rad of allRad) {
    if (rad.checked === true) rad.checked = false;
  }
});
