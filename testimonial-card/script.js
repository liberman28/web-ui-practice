/**
 * testimonial-flip-card
 * Alterna entre la cara "quote" y la cara "video" mediante
 * un <button> con aria-pressed, para que el flip sea accesible
 * por click, tap y teclado (Enter / Space) sin código extra.
 */

document.querySelectorAll("[data-flip-card]").forEach((trigger) => {
  const card = trigger.closest(".testimonial-flip-card");

  trigger.addEventListener("click", () => {
    const isFlipped = trigger.getAttribute("aria-pressed") === "true";
    trigger.setAttribute("aria-pressed", String(!isFlipped));
    card.classList.add("is-flipping");
  });

  card.addEventListener("animationend", () => {
    card.classList.remove("is-flipping");
  });
});
