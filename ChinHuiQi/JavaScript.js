// Scroll to top button
let myButton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 300) {
    myButton.style.display = "block";
  }
  else {
    myButton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}



// Modal Images
var modal = document.getElementById('myModal');   // Get the modal
var images = document.getElementsByClassName('myImages');   // Get the image and insert it inside the modal
var modalImg = document.getElementById("modal-img");    // the image in the modal

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    myButton.style.display = "none";
  }
}

var span = document.getElementsByClassName("close")[0];   // Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  scrollFunction();
}


