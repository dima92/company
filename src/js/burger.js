export function initBurger() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const body = document.body;

  if (!burger || !nav) return;

  const togglenav = () => {
    burger.classList.toggle("burger--active");
    nav.classList.toggle("nav--open");
    body.classList.toggle("disable-scroll");
  };

  const closenav = () => {
    burger.classList.remove("burger--active");
    nav.classList.remove("nav--open");
    body.classList.remove("disable-scroll");
  };

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    togglenav();
  });

  const navLinks = nav.querySelectorAll(".nav__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", closenav);
  });

  document.addEventListener("click", (e) => {
    const isClickInsidenav = nav.contains(e.target);
    const isClickOnBurger = burger.contains(e.target);

    if (
      !isClickInsidenav &&
      !isClickOnBurger &&
      nav.classList.contains("nav--open")
    ) {
      closenav();
    }
  });
}
