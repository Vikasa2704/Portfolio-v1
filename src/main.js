// Імпортуємо бібліотеку Accordion з пакету 'accordion-js'
import Accordion from 'accordion-js';

// Знаходимо елемент списку FAQ за допомогою селектора '.faq-list'
const faqList = document.querySelector('.faq-list');

// Знаходимо всі елементи FAQ у списку за допомогою селектора '.faq-item'
const faqItems = faqList.querySelectorAll('.faq-item');

// Створюємо новий екземпляр Accordion, передаємо список FAQ та налаштування
new Accordion(faqList, {
  // Тривалість анімації (400 мс)
  duration: 400,
  // Дозволяємо розгортання лише одного елемента за раз
  showOne: true,
  // Забороняємо розгортання кількох елементів одночасно
  showMultiple: false,
  // Визначаємо функцію зворотного виклику при переключенні
  onToggle: function (event) {
    // Знаходимо кнопку, яка була натиснута
    const clickedButton = event.target.closest('.questions');
    // Знаходимо батьківський елемент для натиснутої кнопки
    const clickedItem = clickedButton.parentNode;

    // Закриваємо всі інші елементи FAQ, видаляючи клас 'is-active'
    faqItems.forEach(item => item.classList.remove('is-active'));
    // Переключаємо стан активності для натиснутого елемента
    clickedItem.classList.toggle('is-active');

    // Знаходимо попередній елемент списку
    const previousItem = clickedItem.previousElementSibling;
    if (previousItem) {
      // Якщо попередній елемент існує, змінюємо його стиль обрамлення
      previousItem.style.borderBottom = clickedItem.classList.contains(
        'is-active'
      )
        ? 'none'
        : '';
    }
  },
});

// Додаємо обробник подій для кожної кнопки відповіді всередині FAQ елементів
document.querySelectorAll('.faq-item .btn-answear').forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Знаходимо батьківський елемент для натиснутої кнопки
    const listItem = btn.closest('.faq-item');
    // Переключаємо стан активності для натиснутого елемента
    listItem.classList.toggle('is-active');
  });
});
