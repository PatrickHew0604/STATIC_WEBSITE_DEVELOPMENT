function show(detailId){
    if (detailId == 'day') {
      document.getElementById('showDay').style.display='none';
      document.getElementById('hideDay').style.display='block';
      document.getElementById('day').style.display='block';
    }
    else if (detailId == 'time'){
      document.getElementById('showTime').style.display='none';
        document.getElementById('hideTime').style.display='block';
        document.getElementById('time').style.display='block';
    }
    else if (detailId == 'duration'){
      document.getElementById('showDuration').style.display='none';
        document.getElementById('hideDuration').style.display='block';
        document.getElementById('duration').style.display='block';
    }
    else if (detailId == 'fee'){
      document.getElementById('showFee').style.display='none';
        document.getElementById('hideFee').style.display='block';
        document.getElementById('fee').style.display='block';
    }
    else if (detailId == 'things'){
      document.getElementById('showThings').style.display='none';
        document.getElementById('hideThings').style.display='block';
        document.getElementById('things').style.display='block';
    }
    else if (detailId == 'location'){
      document.getElementById('showLocation').style.display='none';
        document.getElementById('hideLocation').style.display='block';
        document.getElementById('location').style.display='block';
    }
  }
function hide(detailId){
    if (detailId == 'day'){
      document.getElementById('hideDay').style.display='none';
      document.getElementById('showDay').style.display='block';
      document.getElementById('day').style.display='none';
    }
    else if (detailId == 'time'){
      document.getElementById('hideTime').style.display='none';
      document.getElementById('showTime').style.display='block';
      document.getElementById('time').style.display='none';
    }
    else if (detailId == 'duration'){
      document.getElementById('hideDuration').style.display='none';
      document.getElementById('showDuration').style.display='block';
      document.getElementById('duration').style.display='none';
    }
    else if (detailId == 'fee'){
      document.getElementById('hideFee').style.display='none';
      document.getElementById('showFee').style.display='block';
      document.getElementById('fee').style.display='none';
    }
    else if (detailId == 'things'){
      document.getElementById('hideThings').style.display='none';
      document.getElementById('showThings').style.display='block';
      document.getElementById('things').style.display='none';
    }
    else if (detailId == 'location'){
      document.getElementById('hideLocation').style.display='none';
      document.getElementById('showLocation').style.display='block';
      document.getElementById('location').style.display='none';
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}