// TeethShine Dental Care - Version 2

document.addEventListener("DOMContentLoaded", () => {

  // Mobile menu
  const menu = document.querySelector(".menu");
  const nav = document.querySelector("nav");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }

  // Scroll reveal animations
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => {
      element.classList.add("visible");
    });
  }

  // Appointment form → WhatsApp
  const form = document.getElementById("appointmentForm");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const data = new FormData(form);

      const name = data.get("name") || "";
      const phone = data.get("phone") || "";
      const date = data.get("date") || "";
      const message = data.get("message") || "N/A";

      const whatsappMessage =
        `Hello Teethshine Dental Care!%0A%0A` +
        `I would like to request an appointment.%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Phone: ${encodeURIComponent(phone)}%0A` +
        `Preferred date: ${encodeURIComponent(date)}%0A` +
        `Message: ${encodeURIComponent(message)}%0A%0A` +
        `Please confirm the available time.`;

      window.open(
        `https://wa.me/918800720072?text=${whatsappMessage}`,
        "_blank"
      );
    });
  }

  // Current year in footer
  const year = document.querySelector("[data-year]");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
