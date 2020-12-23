// console.log ("Coucou ma belle")

// const year = 2020;

// const yearOfBirthday = 1996;


// const yearOfBirthday = window.prompt("Quel est votre année de naissance ?");

// console.log (typeof yearOfBirthday)

// const age = year - yearOfBirthday;

// console.log (age);

// document.querySelector ("#age"),textContent = "Je connait ton âge petite coquine" + age + " ans";
// let isMenuActiv = false
// document.querySelector("#btMenu").addEventListener("click", function(){
//     console.log("click");
//      if (isMenuActiv == false) {
//         console.log("off");
//         document.querySelector("#navMain").style.display = "block";
//         isMenuActiv = true;
//     }
//  else {
//      console.log ("on");
//      document.querySelector("#navMain").style.display = "none";
//      isMenuActiv = false;
//  }

// )





document.querySelector("#btSecret").addEventListener("click" , function(){
   console.log("click");
   const codeSecret = "101196";
   let secret = window.prompt("Mot de passe svp");
 while(secret !== codeSecret) {
   console.log("mauvais mot de passe")
   secret = window.prompt("Mauvais mot de passe. recommence !");

 }
 document.querySelector(".messageSecret-js").classList.toggle("show");
 


})

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}