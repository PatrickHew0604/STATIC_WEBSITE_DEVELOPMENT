// ! Slide Show Code
let count = 2;
setInterval(() => {
  document.querySelector("#rad" + count).checked = true;
  count++;
  if (count > 4) count = 1;
}, 5000);

const btnExplore = document.querySelector("#btnExplore");
btnExplore.addEventListener("click", () => {
  const part2 = document.querySelector("#part2");
  part2.scrollIntoView();
});
