"use strict";
const tratamientos = document.querySelectorAll(".tratamientos");
const titulo = document.querySelectorAll(".tratamiento-title");
const promoBrilla = document.querySelector(".promo-brilla");
const promoBonita =  document.querySelector(".promo-bonita");
const promoBb =  document.querySelector(".promo-bb");
const closeBtn =  document.querySelector(".close-btn");
const popup =  document.querySelector('.popup');
// #reparaciones > div.tratamiento-title > div > i.fas.fa-plus

titulo.forEach((cadaTitulo, i) => {
  titulo[i].addEventListener("click", () => {
    let mas = document.querySelector("body > div > div.menu-desplegable > div.tratamientos:nth-child(" + (i + 1 ) + ") > div.tratamiento-title > div > i.fas.fa-plus");
    let menos = document.querySelector("body > div > div.menu-desplegable > div.tratamientos:nth-child(" + (i + 1 ) + ") > div.tratamiento-title > div > i.fas.fa-minus");
    if (!tratamientos[i].classList.contains("activo")) {
      tratamientos.forEach(() => {
        tratamientos[i].classList.remove("activo");
        mas.style.display = "block";
        menos.style.display = "none";
      });
      tratamientos[i].classList.add("activo");
      mas.style.display = "none";
      menos.style.display = "block";
    }else{
        tratamientos[i].classList.remove("activo");
        mas.style.display = "block";
        menos.style.display = "none";
    }
  });
});

function popupHandler(promo){
  if (!popup.classList.contains(promo) === 'close') {
    if (!popup.classList.contains("activo")) {
      popup.classList.add("activo")
    }
  }else{
    popup.classList.remove("activo")
  }
}
promoBonita.addEventListener('click', popupHandler('promo-bonita'))
promoBb.addEventListener('click', popupHandler('promo-bb'))
closeBtn.addEventListener('click', popupHandler('close'))
