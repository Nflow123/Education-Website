let options = document.querySelectorAll(
  ".about .container .top-section .options-box .option"
);
let statusCheck = true;

options.forEach((item) => {
  item.onclick = (e) => {
    if (item.classList != "option active" && statusCheck == true) {
      statusCheck = false;
    } else if (item.classList != "option active" && statusCheck == false) {
      statusCheck = true;
    }

    if (statusCheck === true) {
      monthlyCardsContainer.classList.remove("hideContainer");
      monthlyCardsContainer.classList.add("showContainer");
      yearlyCardsContainer.classList.add("hideContainer");
      yearlyCardsContainer.classList.remove("showContainer");
    }
    if (statusCheck === false) {
      monthlyCardsContainer.classList.remove("showContainer");
      monthlyCardsContainer.classList.add("hideContainer");
      yearlyCardsContainer.classList.remove("hideContainer");
      yearlyCardsContainer.classList.add("showContainer");
    }

    options.forEach((option) => {
      option.classList.remove("active");
    });
    item.classList.add("active");
  };
});

let monthlyCardsContainer = document.getElementById("monthlyCardsContainer");
let yearlyCardsContainer = document.getElementById("yearlyCardsContainer");
yearlyCardsContainer.classList.add("hideContainer");
