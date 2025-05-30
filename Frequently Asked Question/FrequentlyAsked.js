var acc = document.querySelectorAll(".accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const txtBox = document.querySelector("#searchText");
txtBox.addEventListener("input", () => {
  let searchStr = txtBox.value.toLowerCase();
  if (searchStr != null) {
    for (let i = 0; i < acc.length; i++) {
      let temp = acc[i].childNodes[3].innerText.toLowerCase();
      // ? Found !
      if (temp.indexOf(searchStr) > -1) {
        acc[i].classList.remove("hide");
        setTimeout(() => {
          acc[i].style.display = "";
        }, 800);
      } else {
        {
          // ! These is used to prevent the box has been opened
          if (acc[i].classList.contains("active"))
            acc[i].classList.toggle("active");
          var panel = acc[i].nextElementSibling;
          panel.style.maxHeight = null;
        }
        // ? Not Found !
        acc[i].classList.add("hide");
        setTimeout(() => {
          acc[i].style.display = "none";
        }, 800);
      }
      // acc[i].style.display = "";
      /* acc[i].style.display = "none" */
    }
  }
});
