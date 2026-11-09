
const facts = [
    "Birinchi elektron kompyuterlardan biri ENIAC juda katta hajmga ega bo'lgan.",
    "Zamonaviy protsessorlar bir soniyada milliardlab amallarni bajarishi mumkin.",
    "Superkompyuterlar ob-havo prognozlarini hisoblashda ishlatiladi.",
    "SSD qurilmalari ma'lumotlarni flesh xotirada saqlaydi.",
    "Sun'iy intellekt zamonaviy kompyuterlarning imkoniyatlarini kengaytirmoqda."
];

const moreBtn = document.getElementById("moreBtn");
const fact = document.getElementById("fact");

moreBtn.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * facts.length);

    fact.textContent = facts[randomIndex];
});
