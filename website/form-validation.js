// form-validation.js

/**
 * Валидация текстового поля
 * @param {HTMLInputElement} field - Поле для валидации
 * @param {number} minLength - Минимальная длина
 * @returns {boolean} Валидно ли поле
 */
export const validateTextField = (field, minLength = 2) => {
  const value = field.value.trim();
  if (value.length < minLength) {
    showError(field, `Минимум ${minLength} символа`);
    return false;
  }
  clearError(field);
  return true;
};

/**
 * Валидация email
 * @param {HTMLInputElement} field - Поле с email
 * @returns {boolean} Валидно ли поле
 */
export const validateEmail = (field) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(field.value.trim())) {
    showError(field, "Некорректный email");
    return false;
  }
  clearError(field);
  return true;
};

/**
 * Валидация телефона
 * @param {HTMLInputElement} field - Поле с телефоном
 * @returns {boolean} Валидно ли поле
 */
export const validatePhone = (field) => {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
  if (!phoneRegex.test(field.value.trim())) {
    showError(field, "Введите корректный номер");
    return false;
  }
  clearError(field);
  return true;
};

/**
 * Валидация textarea
 * @param {HTMLTextAreaElement} field - Текстовое поле
 * @param {number} minLength - Минимальная длина
 * @returns {boolean} Валидно ли поле
 */
export const validateTextarea = (field, minLength = 10) => {
  const value = field.value.trim();
  if (value.length < minLength) {  // Исправлено value.lenth на value.length
    showError(field, `Минимум ${minLength} символов`);
    return false;
  }
  clearError(field);
  return true;
};

/**
 * Валидация чекбокса
 * @param {HTMLInputElement} checkbox - Чекбокс
 * @returns {boolean} Валидно ли поле
 */
export const validateCheckbox = (checkbox) => {
  if (!checkbox.checked) {
    const container = checkbox.closest(".checkbox_group");  // Исправлено checkbox_group на checkbox-group
    showError(container, "Необходимо согласие");
    return false;
  }
  clearError(checkbox.closest(".checkbox_group"));
  return true;
};

// Показать ошибку
const showError = (input, message) => {  // Исправлено massage на message
  const container = input.closest(".form_group, .checkbox-group");  // Исправлено form_grop и chekbox_group
  const errorElement = container.querySelector(".error-message");  // Исправлено querySelecor и error_massage
  errorElement.textContent = message;  // Исправлено textContenmt
  input.classList.add("error");
};

// Очистить ошибку
const clearError = (input) => {
  const container = input.closest(".form_group, .checkbox-group");
  if (!container) return; // если контейнер не найден, выходим

  const errorElement = container.querySelector(".error-message");
  if (errorElement) {
    errorElement.textContent = "";
  }

  input.classList.remove("error");
};
