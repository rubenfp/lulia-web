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
const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const location = document.getElementById("location").value;
        const service = document.getElementById("service").value;
        const project = document.getElementById("project").value;

        const subject = "Consulta de seguridad - LULIA";

        const body =
            "Nueva consulta recibida desde la web de LULIA.%0D%0A%0D%0A" +
            "Nombre: " + encodeURIComponent(name) + "%0D%0A" +
            "Email: " + encodeURIComponent(email) + "%0D%0A" +
            "Teléfono: " + encodeURIComponent(phone) + "%0D%0A" +
            "Ubicación: " + encodeURIComponent(location) + "%0D%0A" +
            "Servicio: " + encodeURIComponent(service) + "%0D%0A%0D%0A" +
            "Proyecto:%0D%0A" +
            encodeURIComponent(project);

        window.location.href =
            "mailto:info@lulia.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + body;

    });

}