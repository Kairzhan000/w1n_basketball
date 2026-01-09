// Липкая шапка
window.onscroll = () => {
    const header = document.getElementById("main-header");
    if (window.scrollY > window.innerHeight) header.classList.add("hidden");
    else header.classList.remove("hidden");
};

// Модалка
const modal = document.getElementById('modal');
const openBtns = document.querySelectorAll('.open-modal');
const closeBtn = document.querySelector('.close-modal');

openBtns.forEach(btn => btn.addEventListener('click', () => {
    modal.style.display = 'flex';
}));

closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });

// Форма
document.getElementById('tg-form').onsubmit = async e => {
    e.preventDefault();
    const { name, phone, group } = e.target.elements;

    try {
        // Запрос к вашему серверу (Node.js), а не напрямую в Telegram
        const res = await fetch('/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name.value,
                phone: phone.value,
                group: group.value
            })
        });

        const data = await res.json();

        if(data.status === 'success') alert('Заявка отправлена!');
        else alert('Ошибка отправки: ' + JSON.stringify(data.error));
    } catch(err) {
        alert('Ошибка сервера. Попробуйте позже.');
        console.error(err);
    }

    modal.style.display = 'none';
    e.target.reset();
};
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');

  // Открытие/закрытие по клику на бургер
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
    
    // Блокируем скролл сайта при открытом меню
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  // Закрытие меню при клике на любую ссылку (чтобы перейти к разделу)
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      nav.classList.remove('active');
      burger.classList.remove('toggle');
      document.body.style.overflow = '';
    });
  });
});
