document.querySelectorAll(".business-line__list__item").forEach((item) => {
  item.addEventListener("click", () => {
    // Сначала убираем класс expanded у всех элементов
    document.querySelectorAll(".business-line__list__item").forEach((i) => {
      i.classList.remove("expanded");
    });

    // Затем добавляем класс expanded только к текущему элементу
    item.classList.toggle("expanded");
  });
});
