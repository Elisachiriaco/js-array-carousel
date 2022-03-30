let currentIndex = 0;
const listaImmagini = document.getElementsByClassName("item");
const next = document.querySelector(".next");
const prev = document.querySelector ('.prev');


next.addEventListener("click", function () {
  listaImmagini[currentIndex].classList.remove("active");
  currentIndex += 1;
  if (currentIndex > 4) {currentIndex = 0};
  listaImmagini[currentIndex].classList.add("active");
});

prev.addEventListener("click", function () {
    listaImmagini[currentIndex].classList.remove("active");
    currentIndex -= 1;
    if (currentIndex < 0) {currentIndex = 4};
    listaImmagini[currentIndex].classList.add("active");
});