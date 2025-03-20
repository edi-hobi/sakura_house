document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const guests = document.getElementById('guests').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = ''; // Сброс сообщения об ошибке
    // Валидация введённых данных
    if (!name || !phone || !guests || !date || !time) {
        errorMessage.textContent = 'Пожалуйста, заполните все поля!';
        return;
    }
    // Проверка формата телефона
    const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phone.match(phonePattern)) {
        errorMessage.textContent = 'Введите телефон в формате: +7 (999) 999-99-99';
        return;
    }
    alert('Ваш запрос на бронирование отправлен!'); // Сообщение об успешной отправке
    document.getElementById('bookingForm').reset();
    document.getElementById('errorMessage').textContent = '';
});
// Очистка полей формы
document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('bookingForm').reset();
    document.getElementById('errorMessage').textContent = '';
});