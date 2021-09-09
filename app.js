"use strict";
const tratamientos = document.querySelectorAll(".tratamientos");
const titulo = document.querySelectorAll(".tratamiento-title");

// #reparaciones > div.tratamiento-title > div > i.fas.fa-plus
const mas = document.querySelector(".fa-plus");
const menos = document.querySelector(".fa-minus");

titulo.forEach((cadaTitulo, i) => {
  titulo[i].addEventListener("click", () => {
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
