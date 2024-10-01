document.addEventListener("DOMContentLoaded", function () {
  // Находим элементы выпадающего списка, заголовка, затемнённого фона, кнопок регионов и локаций
  const dropdown = document.querySelector(".officies__dropdown");
  const title = document.querySelector(".officies__title");
  const backdrop = document.querySelector(".backdrop");
  const regionButtons = document.querySelectorAll(".regions li");
  const locations = document.querySelectorAll(".location");
  const regionItems = document.querySelectorAll('.officies__dropdown > ul > li');

  // Открытие/закрытие выпадающего списка при клике на заголовок
  title.addEventListener("click", () => {
    // Переключаем класс "show" у выпадающего списка и затемнённого фона
    const isDropdownOpen = dropdown.classList.toggle("show");
    backdrop.classList.toggle("show", isDropdownOpen);

    if (isDropdownOpen) {
      // Если выпадающий список открыт, перемещаем фокус на него
      dropdown.focus();
    } else {
      // Если список закрыт, возвращаем фокус на заголовок
      title.focus();
    }
  });

  // Закрытие выпадающего списка при клике на затемнённый фон
  backdrop.addEventListener("click", closeDropdown);

  // Закрытие выпадающего списка при нажатии клавиши Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && dropdown.classList.contains("show")) {
      closeDropdown(); // Закрываем, если открыт и нажата клавиша Escape
    }
  });

  // Функция закрытия выпадающего списка и затемнённого фона
  function closeDropdown() {
    dropdown.classList.remove("show"); // Убираем класс "show" у списка
    backdrop.classList.remove("show"); // Убираем класс "show" у фона
  }

  // Обработка кликов по кнопкам регионов
  regionButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Удаляем класс "active" у всех кнопок регионов
      regionButtons.forEach((btn) => btn.classList.remove("active"));

      // Добавляем класс "active" к текущей кнопке
      button.classList.add("active");

      // Получаем выбранный регион через атрибут data-region
      const selectedRegion = button.getAttribute("data-region");

      // Перебираем все локации
      locations.forEach((location) => {
        // Показать локации, которые соответствуют выбранному региону или всем регионам (если выбран "all")
        location.classList.toggle(
          "show",
          location.getAttribute("data-region") === selectedRegion ||
            selectedRegion === "all"
        );
      });
    });
  });

  // Обработка кликов по элементам регионов и открытие вложенных списков городов
  regionItems.forEach((regionItem) => {
    const citiesList = regionItem.querySelector('.regions_full-cities');

    regionItem.addEventListener('click', function () {
      if (citiesList) {
        // Открываем/закрываем список городов
        citiesList.classList.toggle('show');
        // Поворачиваем стрелку
  
      }
    });
  });
});
