const btnHamburger = document.querySelector(".hamburger");
const menuLink = document.querySelector(".menu");

// Window screen
window,
  addEventListener("resize", function () {
    if (window.innerWidth <= 767) {
      menuLink.classList.add("collapse");
    } else if (window.innerWidth >= 768) {
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
