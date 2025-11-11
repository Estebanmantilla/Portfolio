// === Retro Typing Effect for All Headings ===
document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll("h1, h2, h3");

  titles.forEach((title, index) => {
    const originalText = title.textContent.trim();
    title.textContent = ""; // limpiar antes de escribir

    let i = 0;
    function type() {
      if (i < originalText.length) {
        title.textContent += originalText.charAt(i);
        i++;
        setTimeout(type, 40 + Math.random() * 50); // velocidad aleatoria leve
      }
    }

    // Pequeño delay entre cada título (efecto secuencial)
    setTimeout(type, 500 * index);
  });
});
