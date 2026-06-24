/* =========================
COUNTDOWN LUXURY
========================= */

const target = new Date("2026-09-05T18:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const diff = target - now;

if(diff <= 0){

document.getElementById("days").innerHTML = "0";
document.getElementById("hours").innerHTML = "0";
document.getElementById("minutes").innerHTML = "0";
document.getElementById("seconds").innerHTML = "0";
return;

}

const days = Math.floor(diff / 86400000);

const hours = Math.floor(
(diff % 86400000) / 3600000
);

const minutes = Math.floor(
(diff % 3600000) / 60000
);

const seconds = Math.floor(
(diff % 60000) / 1000
);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000);

/* =========================
FADE ON SCROLL
========================= */

const fades = document.querySelectorAll(".fade");

function showElements(){

fades.forEach(el => {

const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
  el.classList.add("show");
}

});

}

window.addEventListener("scroll",showElements);

showElements();

/* =========================
RSVP DEMO
========================= */

const form = document.getElementById("rsvpForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();
alert("Confirmarea a fost trimisă cu succes!");
form.reset();

});

}

/* =========================
   LIGHTBOX GALERIE
========================= */

const galleryImages =
document.querySelectorAll(".gallery img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const closeBtn =
document.querySelector(".close");
const prevBtn =
document.querySelector(".prev");

const nextBtn =
document.querySelector(".next");

let currentIndex = 0;

galleryImages.forEach((img,index) => {

img.addEventListener("click", () => {

currentIndex = index;

lightbox.style.display = "flex";

lightboxImg.src = img.src;

});

});

closeBtn.addEventListener("click", () => {

lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

if(e.target === lightbox){

lightbox.style.display = "none";

}

});
prevBtn.addEventListener("click", () => {

currentIndex--;

if(currentIndex < 0){

currentIndex =
galleryImages.length - 1;

}

lightboxImg.src =
galleryImages[currentIndex].src;

});

nextBtn.addEventListener("click", () => {

currentIndex++;

if(currentIndex >= galleryImages.length){

currentIndex = 0;

}

lightboxImg.src =
galleryImages[currentIndex].src;

});
/* =========================
   NAVBAR SCROLL
========================= */

window.addEventListener("scroll", () => {

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});
