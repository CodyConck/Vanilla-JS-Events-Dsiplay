const card = document.querySelectorAll(".card");

card.forEach(function (card) {
  card.addEventListener("click", function (e) {
    const info = e.currentTarget;
    info.classList.toggle("show-text");
  });
});
