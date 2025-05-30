const btnClear = document.querySelector("#btnClear");
const txtArea = document.querySelector("textarea");
const wordCounts = document.querySelector(".wordCounts");
btnClear.addEventListener("click", () => {
  txtArea.value = "";
  wordCounts.style.color = "black";
  wordCounts.innerText = `0/1000`;
});

txtArea.addEventListener("keyup", () => {
  let str = txtArea.value.trim();
  let count = 0;
  if (str === "") count = 0;
  else count = str.split(/\s+/).length;
  wordCounts.innerText = `${count}/1000`;
  if (count > 20) wordCounts.style.color = "red";
  else wordCounts.style.color = "black";
});
