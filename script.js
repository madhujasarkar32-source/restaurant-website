const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.innerHTML="🌙";

}else{

themeBtn.innerHTML="☀️";

}

});

}

const bookingForm =
document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const phone =
document.getElementById("phone").value;

if(name===""){

alert("Please enter your name");
return;
}

if(!email.includes("@")){

alert("Please enter valid email");
return;
}

if(phone.length<10){

alert("Please enter valid phone number");
return;
}

alert(
"Table Booked Successfully!"
);

bookingForm.reset();

});

}