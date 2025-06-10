// form-submit.js
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    message: form.message.value.trim(),
    agreement: form.agreement.checked,
  };

  try {
    const response = await fetch('http://localhost:3001/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Сообщение успешно отправлено!');
      form.reset();
    } else {
      alert('Ошибка отправки: ' + result.error);
    }
  } catch (error) {
    alert('Ошибка сети: ' + error.message);
  }
});
