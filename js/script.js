let currentIndex = 0;
const listaImmagini = document.getElementById('item');
const next = document.querySelector ('next');

next.addEventListener("click", function () {
    listaImmagini[currentIndex].classList.remove("active");
    currentIndex += 1;
    listaImmagini[currentIndex].classList.add("active");
});