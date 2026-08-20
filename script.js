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

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton =
            contactForm.querySelector("button[type='submit']");

        const originalText =
            submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = "Enviando...";

        const formData =
            new FormData(contactForm);

        const data = {

            name: formData.get("name"),

            email: formData.get("email"),

            phone: formData.get("phone"),

            location: formData.get("location"),

            service: formData.get("service"),

            project: formData.get("project")

        };


        try {

            const response =
                await fetch("/api/contact", {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(data)

                });


            if (!response.ok) {

                throw new Error(
                    "Error al enviar el formulario"
                );

            }


            contactForm.reset();


            alert(
                "Gracias. Hemos recibido tu consulta y nos pondremos en contacto contigo."
            );


        } catch (error) {

            console.error(error);


            alert(
                "No hemos podido enviar la consulta. " +
                "Por favor, inténtalo de nuevo o escríbenos a info@lulia.com."
            );


        } finally {

            submitButton.disabled = false;

            submitButton.textContent =
                originalText;

        }

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

    menuToggle.addEventListener(
        "click",
        function () {

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

        }
    );


    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                mainNav.classList.remove("open");


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menú"
                );


                menuToggle.textContent =
                    "☰";

            }
        );

    });

}