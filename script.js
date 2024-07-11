// changing nav color
function changebg() {
  const scrollValue = window.scrollY;
  const navbar = document.getElementsByClassName("navbar")[0];

  if (scrollValue < 30) {
    console.log(scrollValue);
    navbar.classList.remove('bgcolor');
  } else {
    navbar.classList.add('bgcolor');
  }
}
window.addEventListener('scroll', changebg);

// Adding the menuicon

document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.querySelector(".menu-icon");
  var navBar = document.querySelector(".menu-header");
  var nav = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function () {
    navBar.classList.toggle('active');
    nav.classList.toggle('active');
    toggleMenuIcon();
  });

  function toggleMenuIcon() {
    if (navBar.classList.contains('active')) {
      menuIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.354 4.354a.5.5 0 0 1 .708 0L8 7.293l3.938-3.939a.5.5 0 0 1 .708.708L8.707 8l3.939 3.938a.5.5 0 0 1-.708.708L8 8.707l-3.938 3.939a.5.5 0 0 1-.708-.708L7.293 8 3.354 4.062a.5.5 0 0 1 0-.708z"/></svg>';
    } else {
      menuIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>';
    }
  }
});


//For footer

document.addEventListener("DOMContentLoaded", function() {
  var plusElements = document.querySelectorAll(".plus");
  
  plusElements.forEach(function(plus) {
      plus.addEventListener("click", function() {
          var content = this.parentElement.nextElementSibling;
          content.classList.toggle('show');
          toggleMenuIcon(content, plus);
      });
  });
  

  function toggleMenuIcon(content, plus) {
    if (content.classList.contains('show')) {
        plus.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5z"/></svg>';
    } else {
        plus.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg>';
    }
  }
});




//All time favorite slide
document.addEventListener('DOMContentLoaded', () => {
  const carouselInner = document.querySelector('.favbottom');
  const items = document.querySelectorAll('.favbox');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  function showSlide(index) {
    const offset = -index * 50;
    carouselInner.style.transform = `translateX(${offset}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
  }

  document.querySelector('.arrow-next').addEventListener('click', showNextSlide);
  document.querySelector('.arrow-prev').addEventListener('click', showPrevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      currentIndex = index;
    });
  });

  // Initialize the first slide
  showSlide(currentIndex);
});
