window.addEventListener("DOMContentLoaded", function (event) {
  // Scroll to anchors
  (function () {
    const smoothScroll = function (targetEl, duration) {
      const headerElHeight = document.querySelector(".header").clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;

      const ease = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = function (currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);
    };

    const scrollTo = function () {
      const links = document.querySelectorAll(".js-scroll");
      links.forEach((each) => {
        each.addEventListener("click", function () {
          const currentTarget = this.getAttribute("href");
          smoothScroll(currentTarget, 100);
        });
      });
    };
    scrollTo();
  })();

  //Burger
  (function () {
    var burger = document.querySelector(".header__burger-container"),
      navLink = document.querySelectorAll(".header__nav-link"),
      nav = document.querySelector(".header__nav");

    burger.onclick = function () {
      nav.classList.toggle("menu-opened");
    };

    navLink.forEach((n) => n.addEventListener("click", closeMenu));
    function closeMenu() {
      // hamburger.classList.remove("active");
      nav.classList.remove("menu-opened");
    }
  })();

  // section observer js
  const paragraphs = document.querySelectorAll("p");
  const h4 = document.querySelectorAll("h4");
  const h3 = document.querySelectorAll("h3");
  const h2 = document.querySelectorAll("h2");
  const h1 = document.querySelector("h1");
  const clientsImgs = document.querySelectorAll(".clients__logos-img");

  const options = {
    // treshold: 1,
    rootMargin: "-100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("show");
      }
    });
  }, options);

  paragraphs.forEach((p) => {
    observer.observe(p);
  });

  h4.forEach((h4) => {
    observer.observe(h4);
  });

  h3.forEach((h3) => {
    observer.observe(h3);
  });

  h2.forEach((h2) => {
    observer.observe(h2);
  });

  observer.observe(h1);

  clientsImgs.forEach((el) => {
    observer.observe(el);
  });
});
