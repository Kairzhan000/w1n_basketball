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
const translations = {
    ru: {
        nav_programs: "Тренировочные программы",
        nav_coach: "Главный тренер",
        nav_contacts: "Контакты",
        nav_join: "Записаться",
        hero_subtitle: "Следующая легенда — ты.",
        hero_title: "Мы баскетбольная секция <br> <span class='highlight-color'>W1N basketball</span>",
        hero_btn: "Записаться",
        filo_title: "Философия <span>W1N</span>",
        filo_text: "Мы не просто учим играть в баскетбол. Мы воспитываем характер. В W1N ты найдешь команду единомышленников, готовую идти до конца.",
        train_title: "Тренировочные <span>программы</span>",
        group_title: "Групповые занятия",
        group_title_d:"Базовый фундамент и командная химия. Работа над техникой броска, дриблингом и игровым мышлением в кругу единомышленников.",
        individual_title:"Индивидуальные занятия-(100.000тг/12 занятии)",
        individual_title_d:"Персональный апгрейд твоих навыков. Фокус на деталях, разбор ситуаций 1х1 и интенсивная работа под личный запрос игрока.",
        gym_title:"Физическая подготовка",
        gym_title_d:"Развитие взрывной силы, прыжка и выносливости. Подготовка тела к высоким нагрузкам, чтобы доминировать на паркете весь матч.",
        join_title: "Стань частью <span>W1N</span>",
        join_text: "Мы ждем именно тебя. Неважно, какой у тебя уровень сейчас.",
        couch:"Главный тренер",
        couch_d:"— Гарантирую безопасность и комфорт на площадке.— Внимателен к каждому игроку, независимо от уровня.— Помогаю раскрыть потенциал, а не просто бросать мяч.«Моя задача — раскрыть потенциал каждого игрока и подготовить его к любым вызовам на паркете».",
        schedule:"Расписание",
        group_junior:"Младшая группа (7-13 лет)",
        group_senior:"Старшая группа (14-21 лет)",
        group_pro:"Старшая группа (16-21 лет)",
    },
    kz: {
        nav_programs: "Жаттығу бағдарламалары",
        nav_coach: "Бас жаттықтырушы",
        nav_contacts: "Контакт",
        nav_join: "Жазылу",
        hero_subtitle: "Келесі аңыз — сенсің.",
        hero_title: "Біз <br> <span class='highlight-color'>W1N basketball</span> баскетбол секциясымыз",
        hero_btn: "Жазылу",
        filo_title: "<span>W1N</span> философиясы",
        filo_text: "Біз тек баскетбол ойнауды үйретпейміз. Біз мінезді тәрбиелейміз. W1N-де сен соңына дейін баруға дайын пікірлестер командасын табасың.",
        train_title: "Жаттығу <span>бағдарламалары</span>",
        group_title: "Топтық жаттығулар-(20.000тг/12 жаттығулар)",
        group_title_d:"Негізгі іргетас және командалық түсіністік. Пікірлестер ортасында лақтыру техникасы, дриблинг және ойын интеллектін дамыту.",
        individual_title:"Жеке жаттығулар-(100.000тг/12 жаттығулар)",
        individual_title_d:"Сенің дағдыларыңды дербес шыңдау (апгрейд). Егжей-тегжейге назар аудару, 1х1 жағдайларын талдау және ойыншының жеке сұранысы бойынша қарқынды жұмыс.",
        gym_title:"Дене дайындығы-(60.000-80.000тг /12 жаттығулар)",
        gym_title_d:"Жарылыс күшін, секіруді және төзімділікті дамыту. Бүкіл ойын бойы паркетте басымдық таныту үшін денені жоғары жүктемелерге дайындау.16 жаска дин 60.000 тг ,16 жастан жогары 80.000тг",
        join_title: "<span>W1N</span> бөлігі бол",
        join_text: "Біз дәл сені күтеміз. Қазіргі деңгейің қандай болса да маңызды емес.",
        couch:"Бас бапкер",
        couch_d:"— Алаңдағы қауіпсіздік пен жайлылыққа кепілдік беремін.— Деңгейіне қарамастан, әр ойыншыға ерекше көңіл бөлемін.\n— Тек доп лақтыруды емес, әркімнің ішкі әлеуетін ашуға көмектесемін.",
        get_schedule:"Жаттығу кестесі",
        group_junior:"Кіші топ (7-13 жас)",
        group_senior:"Жоғарғы топ (14-21 жас)",
        group_pro:"Жоғарғы топ (16-21 жас)",
    }
};

// Функция переключения
function setLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Подсветка активной кнопки
    document.getElementById('lang-ru').classList.toggle('active', lang === 'ru');
    document.getElementById('lang-kz').classList.toggle('active', lang === 'kz');
}

document.getElementById('lang-ru').addEventListener('click', () => setLanguage('ru'));
document.getElementById('lang-kz').addEventListener('click', () => setLanguage('kz'));

const scheduleData = {
  group_junior: {
    ru: "Вторник - Четверг - Суббота<br>Утро: 09:00<br>Вечер: 18:00",
    kk: "Сейсенбі - Бейсенбі - Сенбі<br>Таңертең: 09:00<br>Кешкі: 18:00"
  },
  group_senior: {
    ru: "Понедельник - Среда - Пятница<br>Утро: 09:00<br>Вечер (Foundation): 18:00<br>Вечер (Advanced): 19:00",
    kk: "Дүйсенбі - Сәрсенбі - Жұма<br>Таңертең: 09:00<br>Кешкі (Foundation): 18:00<br>Кешкі (Advanced): 19:00"
  },
  group_pro: {
    ru: "Вторник - Четверг - Суббота<br>Вечерняя группа: 19:00",
    kk: "Сейсенбі - Бейсенбі - Сенбі<br>Кешкі топ: 19:00"
  }
};

// Данные выносим в отдельную константу, если она еще не объявлена
const trainingSchedule = {
  group_junior: {
    ru: "Вторник - Четверг - Суббота<br>Утро: 09:00<br>Вечер: 18:00",
    kk: "Сейсенбі - Бейсенбі - Сенбі<br>Таңертең: 09:00<br>Кешкі: 18:00"
  },
  group_senior: {
    ru: "Понедельник - Среда - Пятница<br>Утро: 09:00<br>Вечер (Foundation): 18:00<br>Вечер (Advanced): 19:00",
    kk: "Дүйсенбі - Сәрсенбі - Жұма<br>Таңертең: 09:00<br>Кешкі (Foundation): 18:00<br>Кешкі (Advanced): 19:00"
  },
  group_pro: {
    ru: "Вторник - Четверг - Суббота<br>Вечерняя группа: 19:00",
    kk: "Сейсенбі - Бейсенбі - Сенбі<br>Кешкі топ: 19:00"
  }
};

const schedModal = document.getElementById("schedModal");
const schedBody = document.getElementById("schedBody");
const schedTitle = document.getElementById("schedTitle");
const schedClose = document.querySelector(".sched-close");

// Открытие модалки
document.querySelectorAll('.schedule-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const groupKey = this.parentElement.querySelector('span').getAttribute('data-key');
    const currentLang = document.documentElement.lang || 'ru'; 

    schedTitle.innerText = this.parentElement.querySelector('span').innerText;
    schedBody.innerHTML = trainingSchedule[groupKey][currentLang];
    
    schedModal.style.display = "block";
  });
});

// Закрытие на крестик
if (schedClose) {
  schedClose.addEventListener('click', () => {
    schedModal.style.display = "none";
  });
}

// Закрытие при клике на темную область (не мешает другим окнам)
window.addEventListener('click', (event) => {
  if (event.target === schedModal) {
    schedModal.style.display = "none";
  }
});
