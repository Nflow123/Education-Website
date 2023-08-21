let allOptionsTitle = document.querySelectorAll(".option-title");

allOptionsTitle.forEach((option) => {
  option.innerHTML = option.dataset.content;
});

let optionBars = document.querySelectorAll(".option-bar");
let optionsAreas = document.querySelectorAll(".options-area");

isCategoryOpen = false;
isLanguageOpen = false;

optionBars.forEach((optionBar) => {
  optionBar.onclick = function () {
    if (optionBar.dataset.type == "category" && isCategoryOpen == false) {
      optionsAreas[0].classList.remove("display-none");
      optionsAreas[0].classList.add("display-flex");
      isCategoryOpen = true;
    } else if (optionBar.dataset.type == "category" && isCategoryOpen == true) {
      optionsAreas[0].classList.add("display-none");
      optionsAreas[0].classList.remove("display-flex");
      isCategoryOpen = false;
    } else if (
      optionBar.dataset.type == "language" &&
      isLanguageOpen == false
    ) {
      optionsAreas[1].classList.remove("display-none");
      optionsAreas[1].classList.add("display-flex");
      isLanguageOpen = true;
    } else if (optionBar.dataset.type == "language" && isLanguageOpen == true) {
      optionsAreas[1].classList.add("display-none");
      optionsAreas[1].classList.remove("display-flex");
      isLanguageOpen = false;
    }
  };
});

let optionsForSelection = document.querySelectorAll(".option-for-selection");
optionsForSelection.forEach((newOption) => {
  newOption.onclick = function () {
    if (newOption.classList[0] == "category-option") {
      allOptionsTitle[0].innerHTML = newOption.innerHTML;
      optionsAreas[0].classList.add("display-none");
      optionsAreas[0].classList.remove("display-flex");
    } else if (newOption.classList[0] == "language-option") {
      allOptionsTitle[1].innerHTML = newOption.innerHTML;
      optionsAreas[1].classList.add("display-none");
      optionsAreas[1].classList.remove("display-flex");
    }
  };
});
