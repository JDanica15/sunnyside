const btnHamburger = document.querySelector(".hamburger");
const menuLink = document.querySelector(".menu");

// Window screen
window,
  addEventListener("resize", function () {
    if (window.innerWidth <= 767) {
      menuLink.classList.add("collapse");
    } else {
      btnHamburger.classList.remove("open");
      menuLink.classList.remove("collapse");
      menuLink.classList.remove("show");
    }
  });

btnHamburger.addEventListener("click", function () {
  console.log("click");

  if (btnHamburger.classList.contains("open")) {
    //open burger
    btnHamburger.classList.remove("open");
    menuLink.classList.remove("show");
  } else {
    //close burger
    btnHamburger.classList.add("open");
    menuLink.classList.add("show");
  }
});

// display animation
const scrollElements = document.querySelectorAll(".reveal");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// SCROLL PERCENTAGE
const updateScrollPercentage = function() { 
  const heightOfWindow = window.innerHeight,
    contentScrolled = window.pageYOffset,
    bodyHeight = document.body.offsetHeight,
    percentage = document.querySelector("[data-scrollPercentage] .percentage")

  if(bodyHeight - contentScrolled <= heightOfWindow) {
   percentage.style.width = "100%"
  }
  else {
    const total = bodyHeight - heightOfWindow,
      got = contentScrolled,
      percent = parseInt((got/total) * 100)
      percentage.style.width = percent + "%"
  }
}

window.addEventListener('scroll', updateScrollPercentage)