// =========================
// DARK / LIGHT MODE
// =========================

const themeBtn =
document.getElementById("themeBtn");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(
document.body.classList.contains("light")
){

themeBtn.innerHTML="☀️";

}else{

themeBtn.innerHTML="🌙";

}

});

}

// =========================
// SCROLL ANIMATION
// =========================

const cards =
document.querySelectorAll(
".food-card, .review-card, .stats div, .category"
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";

}

});

},

{
threshold:0.1
}

);

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform=
"translateY(40px)";

card.style.transition=
"all 0.8s ease";

observer.observe(card);

});

// =========================
// SEARCH FUNCTION
// =========================

const searchInput =
document.querySelector(
".search-box input"
);

if(searchInput){

searchInput.addEventListener(
"keyup",

function(){

let filter =
this.value.toLowerCase();

let cards =
document.querySelectorAll(
".food-card"
);

cards.forEach(card=>{

let title =
card.querySelector("h3")
.innerText
.toLowerCase();

if(
title.includes(filter)
){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// =========================
// ORDER BUTTON
// =========================

const orderButtons =
document.querySelectorAll(
".order-btn"
);

orderButtons.forEach(btn=>{

btn.addEventListener(
"click",

function(){

alert(
"Thank you for choosing Royal Gold Restaurant!"
);

});

});

// =========================
// BOOKING FORM VALIDATION
// =========================

const bookingForm =
document.getElementById(
"bookingForm"
);

if(bookingForm){

bookingForm.addEventListener(
"submit",

function(e){

e.preventDefault();

const name =
document.getElementById(
"name"
).value.trim();

const email =
document.getElementById(
"email"
).value.trim();

const phone =
document.getElementById(
"phone"
).value.trim();

if(name===""){

alert(
"Please enter your name."
);

return;

}

if(
!email.includes("@")
){

alert(
"Please enter a valid email."
);

return;

}

if(
phone.length < 10
){

alert(
"Please enter a valid phone number."
);

return;

}

alert(
"🎉 Table Booked Successfully!"
);

bookingForm.reset();

});

}

// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

window.addEventListener(
"scroll",

()=>{

const navbar =
document.querySelector(
".navbar"
);

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 4px 20px rgba(212,175,55,0.25)";

}else{

navbar.style.boxShadow =
"none";

}

}

);