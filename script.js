// ================= BUBBLES =================
const headerBg = document.querySelector('.header-bg');
for (let i = 0; i < 30; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDuration = (4 + Math.random() * 4) + 's';
    bubble.style.width = bubble.style.height = (10 + Math.random()*20) + 'px';
    headerBg.appendChild(bubble);
}

// ================= COCKTAILS =================
const cocktails = [
    {
        name: "Палочка Гаргомеля",
        image: "./img/gargamel_stick.png",
        alcohol: 12,
        ingredients: [
            { name: "Ром", amount: "40 мл" },
            { name: "Сахарный сироп", amount: "10 мл" },
            { name: "Сок черники", amount: "50 мл" },
            { name: "Лайм", amount: "10 мл" }
        ],
        story: "Напоминает волшебную палочку злого Гаргомеля, но с мягким ягодным вкусом."
    },
    {
        name: "Пуковье Смурфа",
        image: "./img/pukanie.png",
        alcohol: 8,
        ingredients: [
            { name: "Водка", amount: "30 мл" },
            { name: "Содовая", amount: "100 мл" },
            { name: "Голубой кюрасао", amount: "15 мл" },
            { name: "Лимон", amount: "10 г" }
        ],
        story: "Лёгкий, шипучий и игривый коктейль, словно маленький пуканчик Смурфа."
    },
    {
        name: "Смурфо Тоник",
        image: "./img/tonik.png",
        alcohol: 10,
        ingredients: [
            { name: "Джин", amount: "40 мл" },
            { name: "Тоник", amount: "100 мл" },
            { name: "Сок голубой черники", amount: "20 мл" },
            { name: "Лёд", amount: "50 г" }
        ],
        story: "Коктейль в голубых оттенках, бодрит и напоминает приключения Смурфов."
    },
    {
        name: "Сопли Смурфа",
        image: "./img/sopli.png",
        alcohol: 6,
        ingredients: [
            { name: "Ликёр блю кюрасао", amount: "20 мл" },
            { name: "Лимонад", amount: "100 мл" },
            { name: "Сироп маракуйи", amount: "15 мл" }
        ],
        story: "Сладкий и липкий коктейль с игривым названием для смелых гостей."
    },
    {
        name: "Шервавый пупок Смурфеты",
        image: "./img/pupok.png",
        alcohol: 14,
        ingredients: [
            { name: "Водка", amount: "40 мл" },
            { name: "Ликёр клубничный", amount: "20 мл" },
            { name: "Сок апельсина", amount: "40 мл" },
            { name: "Лёд", amount: "50 г" }
        ],
        story: "Яркий, фруктовый и немного странный коктейль для любителей смурфовских шуток."
    },
    {
        name: "Гланды Ворчуна",
        image: "./img/glandi.png",
        alcohol: 16,
        ingredients: [
            { name: "Ром тёмный", amount: "40 мл" },
            { name: "Сок ананаса", amount: "30 мл" },
            { name: "Ликёр мараскино", amount: "15 мл" },
            { name: "Лёд", amount: "50 г" }
        ],
        story: "Крепкий и слегка кислый коктейль, как характер ворчливого смурфа."
    },
    {
        name: "Страдающий Растяпа",
        image: "./img/rastapa.png",
        alcohol: 12,
        ingredients: [
            { name: "Джин", amount: "35 мл" },
            { name: "Сок лимона", amount: "20 мл" },
            { name: "Сироп малины", amount: "15 мл" },
            { name: "Тоник", amount: "50 мл" }
        ],
        story: "Сладко-кислый коктейль с мягким ударом, для тех, кто иногда попадает в неприятности."
    },
    {
        name: "Смурф в Блендере",
        image: "./img/blender.png",
        alcohol: 18,
        ingredients: [
            { name: "Ром белый", amount: "30 мл" },
            { name: "Ликёр кокосовый", amount: "20 мл" },
            { name: "Сок ананаса", amount: "50 мл" },
            { name: "Лёд", amount: "100 г" }
        ],
        story: "Коктейль-молния: смешал всё в блендере — и получился голубой взрыв вкуса."
    },
    {
        name: "Смурф Шалун",
        image: "./img/shalun.png",
        alcohol: 20,
        ingredients: [
            { name: "Водка", amount: "40 мл" },
            { name: "Ликёр персиковый", amount: "20 мл" },
            { name: "Сок клюквы", amount: "30 мл" },
            { name: "Лёд", amount: "50 г" }
        ],
        story: "Название провокационное, а вкус сладко-кислый, как тайное удовольствие."
    },
    {
        name: "Смурф Прерий",
        image: "./img/preri.png",
        alcohol: 10,
        ingredients: [
            { name: "Джин", amount: "30 мл" },
            { name: "Сок маракуйи", amount: "25 мл" },
            { name: "Содовая", amount: "50 мл" },
            { name: "Лайм", amount: "10 г" }
        ],
        story: "Свежий, игристый и лёгкий коктейль, словно ветер по смурфской прерии."
    },
    {
        name: "Смущенная смурфета",
        image: "./img/smush.png",
        alcohol: 10,
        ingredients: [
            { name: "Водка", amount: "40 мл" },
            { name: "Клюквенный сок", amount: "60 мл" },
            { name: "Клубничное пюре", amount: "30 мл" },
            { name: "Малиновый сироп", amount: "15 мл" },
            { name: "Содовая", amount: "40 мл" },
            { name: "Клубника и малина", amount: "20 г" }
        ],
        story: "Яркий, игривый и слегка провокационный коктейль, напоминающий фруктовый пунш. Лёгкая ягода и освежающая газированность создают настроение весёлого мультяшного каприза."
    },
    {
        name: "Секрет смурфа",
        image: "./img/secret.png",
        alcohol: 10,
        ingredients: [
            { name: "Джин", amount: "35 мл" },
            { name: "Ликёр Блю Кюрасао", amount: "20 мл" },
            { name: "Фиалковый ликёр", amount: "15 мл" },
            { name: "Лимонный сок", amount: "15 мл" },
            { name: "Тоник", amount: "40 мл" }
        ],
        story: "Таинственный коктейль с магическим сиянием — глубокий сине-фиолетовый цвет будто хранит секреты смурфской ночи."
    },
    {
        name: "Синяя Расчленёнка",
        image: "./img/raschlen.png",
        alcohol: 10,
        ingredients: [
            { name: "Белый ром", amount: "30 мл" },
            { name: "Ликёр Блю Кюрасао", amount: "25 мл" },
            { name: "Лимонад", amount: "60 мл" },
            { name: "Сироп блюберри", amount: "20 мл" },
            { name: "Пробиотический йогуртовый напиток", amount: "30 мл" },
            { name: "Желейные червячки и шарики поппинга", amount: "15 г" }
        ],
        story: "Дерзкий и хаотичный коктейль, поданный в стиле научной лаборатории — колбы, пробирки и электрические оттенки синего создают атмосферу мультяшного безумия."
    },
    {
        name: "Электро Смурфик",
        image: "./img/electro.png",
        alcohol: 10,
        ingredients: [
            { name: "Водка", amount: "40 мл" },
            { name: "Ликёр Блю Кюрасао", amount: "20 мл" },
            { name: "Энергетический напиток", amount: "80 мл" },
            { name: "Тоник", amount: "40 мл" },
            { name: "Лимон", amount: "10 г" }
        ],
        story: "Неоновый киберпанк-коктейль, сверкающий электрическим сиянием, будто созданный в смурфском техно-баре будущего."
    }
];

const catalog = document.getElementById("catalog");
const modal = document.getElementById("cocktailModal");
const closeBtn = document.querySelector(".close");
const cocktailName = document.getElementById("cocktailName");
const cocktailAlcohol = document.getElementById("cocktailAlcohol");
const cocktailIngredients = document.getElementById("cocktailIngredients");
const cocktailStory = document.getElementById("cocktailStory");

cocktails.forEach((cocktail) => {
    const card = document.createElement("div");
    card.className = "cocktail-card";
    card.innerHTML = `
        <img src="${cocktail.image}" alt="${cocktail.name}">
        <h3>${cocktail.name}</h3>
    `;
    card.addEventListener("click", () => {
        cocktailName.textContent = cocktail.name;
        cocktailAlcohol.textContent = cocktail.alcohol;
        cocktailIngredients.innerHTML = "";
        cocktail.ingredients.forEach(ing => {
            const li = document.createElement("li");
            li.textContent = `${ing.name} — ${ing.amount}`;
            cocktailIngredients.appendChild(li);
        });
        cocktailStory.textContent = cocktail.story;
        modal.style.display = "block";
    });
    catalog.appendChild(card);
});

closeBtn.onclick = () => { modal.style.display = "none"; }
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }