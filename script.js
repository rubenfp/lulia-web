// ==========================================
// ANIMACIONES AL HACER SCROLL
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

}


// ==========================================
// FORMULARIO DE CONTACTO
// ==========================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const successMessage =
            document.getElementById("form-success");

        if (successMessage) {

            successMessage.classList.add("visible");

        }


        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const phone =
            document.getElementById("phone").value;

        const location =
            document.getElementById("location").value;

        const service =
            document.getElementById("service").value;

        const project =
            document.getElementById("project").value;


        const subject =
            "Consulta de seguridad - LULIA";


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
            "?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            body;

    });

}


// ==========================================
// MENÚ MÓVIL
// ==========================================

const menuToggle =
    document.querySelector(".menu-toggle");

const mainNav =
    document.querySelector(".main-nav");


if (menuToggle && mainNav) {


    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("open");

        const isOpen =
            mainNav.classList.contains("open");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Cerrar menú"
                : "Abrir menú"
        );


        menuToggle.textContent =
            isOpen
                ? "×"
                : "☰";

    });


    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                "Abrir menú"
            );


            menuToggle.textContent = "☰";

        });

    });

}