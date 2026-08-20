const elements = document.querySelectorAll(
    ".service-card, .approach-step, .sector, .principle"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});
const menuToggle = document.querySelector(".menu-toggle");

const mainNav = document.querySelector(".main-nav");


menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("open");

});
const navLinks = document.querySelectorAll(".main-nav a");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

    });

});