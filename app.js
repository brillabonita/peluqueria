"use strict";
const tratamientos = document.querySelectorAll(".tratamientos");
const titulo = document.querySelectorAll(".tratamiento-title");
const promoBrilla = document.querySelector(".promo-brilla");
const promoBonita = document.querySelector(".promo-bonita");
const promoBb = document.querySelector(".promo-bb");
const closeBtn = document.querySelector(".close-btn");
const promoList = document.querySelector(".pormos-list");

// window.addEventListener("resize", (e) => {
//   titulo.forEach((cadaTitulo, i) => {
//     titulo[i].addEventListener("click", () => {
//       let mas = document.querySelector(
//         ".tratamientos:nth-child(" +
//           (i + 1) +
//           ") > div.tratamiento-title > div > i.fas.fa-plus"
//       );
//       let menos = document.querySelector(
//         ".tratamientos:nth-child(" +
//           (i + 1) +
//           ") > div.tratamiento-title > div > i.fas.fa-minus"
//       );
//       if (window.innerWidth < 1200) {
//         if (!tratamientos[i].classList.contains("activo")) {
//           tratamientos.forEach(() => {
//             tratamientos[i].classList.remove("activo");
//             mas.style.display = "block";
//             menos.style.display = "none";
//           });
//           tratamientos[i].classList.add("activo");
//           mas.style.display = "none";
//           menos.style.display = "block";
//         } else {
//           tratamientos[i].classList.remove("activo");
//           mas.style.display = "block";
//           menos.style.display = "none";
//         }
//       } else {
//         tratamientos[i].classList.add("activo");
//         mas.style.display = "none";
//         menos.style.display = "none";
//       }
//     });
//   });
// });
