const names = [
  { name: "Заяадэлгэр", who: "teacher" },
  { name: "Тэмүүжин", who: "teacher" },
  { name: "Намсрай", who: "teacher" },
  { name: "Тодсүрэн", who: "teacher" },
  { name: "Цэрэнтогтох", who: "teacher" },
];
const result = document.querySelector(".section1");
document.addEventListener("DOMContentLoaded", function () {
  const shownames = names
    .map((el) => {
      return `
        <div class="card">
        <div class="name">${el.name}</div>
        <div class="who">${el.who}</div>
        </div>
        `;
    })
    .join("");
  result.innerHTML = shownames;
});
