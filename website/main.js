// main.js
import {
  validateTextField,
  validateEmail,
  validatePhone,
  validateTextarea,
  validateCheckbox,
} from "./form-validation.js";

const form = document.getElementById("contactForm");
const inputs = {
  name: form.querySelector('input[type="text"]'),  // Добавлена закрывающая кавычка
  email: form.querySelector('input[type="email"]'),
  phone: form.querySelector('input[type="tel"]'),
  message: form.querySelector("textarea"),
  agreement: document.getElementById("agreement"),
};

// Динамическая валидация при вводе
inputs.name.addEventListener("blur", () => validateTextField(inputs.name, 2));
inputs.email.addEventListener("blur", () => validateEmail(inputs.email));
inputs.phone.addEventListener("blur", () => validatePhone(inputs.phone));
inputs.message.addEventListener("blur", () =>
  validateTextarea(inputs.message, 10)
);

// Валидация при отправке
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isNameValid = validateTextField(inputs.name, 2);
  const isEmailValid = validateEmail(inputs.email);
  const isPhoneValid = validatePhone(inputs.phone);
  const isMessageValid = validateTextarea(inputs.message, 10);
  const isAgreementValid = validateCheckbox(inputs.agreement);

  if (
    isNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isMessageValid &&
    isAgreementValid
  ) {
    console.log("Форма валидна, отправляем...");
    // form.submit();
  }
});

const btn = document.querySelector(".info_clothing-examples-container-btn");
const container = document.querySelector(".info_clothing-examples-container");
const zoomBlock = document.querySelector(
  ".info_clothing-examples-zoom-preview"
);

let allImages = [];
let showingFirstPart = true; 

function renderImages(images) {
  const oldImages = container.querySelectorAll(
    ".info_clothing-examples-container-img"
  );
  oldImages.forEach((img) => img.remove());

  images.forEach((item) => {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.classList.add("info_clothing-examples-container-img");

    img.addEventListener("mouseenter", () => {
      zoomBlock.style.backgroundImage = `url(${item.src})`;
    });

    container.insertBefore(img, btn);
  });
}

fetch("data/examples.json")
  .then((res) => res.json())
  .then((data) => {
    allImages = data.filter(item => item.src);

    const firstPart = allImages.slice(0, 11);
    renderImages(firstPart);
  })
  .catch((err) => console.error("Ошибка загрузки данных JSON:", err));

  btn.addEventListener("click", () => {
    if (showingFirstPart) {
      const secondPart = allImages.slice(11);
      btn.innerText = "Назад.";
      renderImages(secondPart);
    } else {
      const secondPart = allImages.slice(0, 11);
      btn.innerText = "Еще.";
      renderImages(secondPart);
    }
    showingFirstPart = !showingFirstPart;
  });
