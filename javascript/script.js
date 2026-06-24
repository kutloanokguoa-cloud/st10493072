let slideIndex = 1;
showSlides(slideIndex);

//Next or Previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Thumbnail image control
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slidesIndex - 1].className += " active";
}

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const submenuToggles = document.querySelectorAll('.submenu-toggle');

//Toogle hamburber menu open/close
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
})

//Toogle submenu on mobile tap
submenuToggles.forEach(toogle => {
  toogle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const submenu = toogle.nextElementSibling;
      submenu.classList.toggle('open');
    }
  });
});

