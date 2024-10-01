document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".corporate-life__slide"); // Все слайды
  const controls = document.querySelectorAll(".corporate-life__control"); // Элементы управления (пагинация)
  const prevButton = document.querySelector(".corporate-life__button--left"); // Кнопка "Назад"
  const nextButton = document.querySelector(".corporate-life__button--right"); // Кнопка "Вперед"
  let currentIndex = 0; // Текущий индекс активного слайда

  // Функция для перехода к конкретному слайду
  function goToSlide(index) {
    // Удаляем классы активности со всех слайдов и элементов пагинации
    slides.forEach((slide) =>
      slide.classList.remove("corporate-life__slide--active")
    );
    controls.forEach((control) =>
      control.classList.remove("corporate-life__control--active")
    );

    // Добавляем класс активности выбранному слайду и элементу пагинации
    slides[index].classList.add("corporate-life__slide--active");
    controls[index].classList.add("corporate-life__control--active");
  }

  // Добавляем слушатели событий на элементы пагинации (для кликов по ним)
  controls.forEach((control, index) => {
    control.addEventListener("click", () => {
      currentIndex = index; // Обновляем текущий индекс
      goToSlide(currentIndex); // Переход к выбранному слайду
    });
  });

  // Слушатель события для кнопки "Назад"
  prevButton.addEventListener("click", () => {
    // Если текущий слайд первый, переход к последнему, иначе - к предыдущему
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(currentIndex);
  });

  // Слушатель события для кнопки "Вперед"
  nextButton.addEventListener("click", () => {
    // Если текущий слайд последний, переход к первому, иначе - к следующему
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(currentIndex);
  });

  // Добавляем плавную анимацию перехода между слайдами
  slides.forEach((slide) => {
    slide.style.transition = "opacity 0.5s ease"; // Анимация изменения прозрачности (0.5 секунд)
  });

  // Обновляем функцию goToSlide для анимации
  function goToSlide(index) {
    // Убираем активность у текущего слайда с плавной анимацией
    slides.forEach((slide) => {
      slide.style.opacity = "0"; // Сначала скрываем все слайды
    });

    // После короткой задержки делаем выбранный слайд видимым
    setTimeout(() => {
      slides.forEach((slide) =>
        slide.classList.remove("corporate-life__slide--active")
      );
      controls.forEach((control) =>
        control.classList.remove("corporate-life__control--active")
      );

      // Переход к выбранному слайду
      slides[index].classList.add("corporate-life__slide--active");
      slides[index].style.opacity = "1"; // Показываем выбранный слайд
      controls[index].classList.add("corporate-life__control--active");
    }, 250); // Небольшая задержка для плавного исчезновения слайда
  }

  // Инициализация начального состояния - показываем первый слайд плавно
  slides[0].style.opacity = "1";
});
