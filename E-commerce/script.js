let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");

function homes(){
  mainPage.style.display = "flex";
  card.style.display = "block";
  card2.style.display = "block";
  blog.style.display = "block";
  about.style.display = "none";
  contact.style.display = "none";

  document.getElementById("home").style.color="rgb(2, 173, 173)";
  document.getElementById("blog").style.color="#FD49A0";
  document.getElementById("contact").style.color="#FD49A0";
  document.getElementById("shop").style.color= "#FD49A0";
  document.getElementById("about").style.color="#FD49A0";
  document.getElementById("contact").style.color="#FD49A0";
}

function shops (){
  mainPage.style.display = "none";
  blog.style.display = "none";
  about.style.display = "none";
  card.style.display = "block";
  card2.style.display = "block";
  contact.style.display = "none";

  document.getElementById("blog").style.color="#FD49A0";
  document.getElementById("home").style.color="#FD49A0";
  document.getElementById("contact").style.color="#FD49A0";
  document.getElementById("shop").style.color="rgb(2, 173, 173)";
  document.getElementById("about").style.color="#FD49A0";
  document.getElementById("contact").style.color="#FD49A0";
}

function blogs(){
  card.style.display = "none";
  card2.style.display = "none";
  mainPage.style.display = "none";
  blog.style.display = "block";
   about.style.display = "none";
   contact.style.display = "none";

  document.getElementById("blog").style.color="rgb(2, 173, 173)";
  document.getElementById("home").style.color="#FD49A0";
  document.getElementById("contact").style.color="#FD49A0";
  document.getElementById("shop").style.color="#FD49A0";
  document.getElementById("about").style.color="#FD49A0";
  document.getElementById("contact").style.color="#FD49A0";

}

function abouts(){
  about.style.display = "block"
  card.style.display = "none";
  card2.style.display = "none";
  mainPage.style.display = "none";
  blog.style.display = "none";
  contact.style.display = "none";

  document.getElementById("blog").style.color= "#FD49A0";
  document.getElementById("home").style.color="#FD49A0";
  document.getElementById("contact").style.color="#FD49A0";
  document.getElementById("shop").style.color="#FD49A0";
  document.getElementById("contact").style.color="#FD49A0";
  document.getElementById("about").style.color="rgb(2, 173, 173)";

}

function contacts(){
  about.style.display = "none"
  card.style.display = "none";
  card2.style.display = "none";
  mainPage.style.display = "none";
  blog.style.display = "none";
  contact.style.display = "block"

  document.getElementById("blog").style.color= "#FD49A0";
  document.getElementById("home").style.color="#FD49A0";
  document.getElementById("contact").style.color="#FD49A0";
  document.getElementById("shop").style.color="#FD49A0";
  document.getElementById("about").style.color="#FD49A0";
  document.getElementById("contact").style.color="rgb(2, 173, 173)";

}
// Cart
function show(img){
  let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;

    document.querySelector(".cart").style.display="flex";
    about.style.display = "none"
  card.style.display = "none";
  card2.style.display = "none";
  mainPage.style.display = "none";
  blog.style.display = "none";
  contact.style.display = "none"
}

function addCart(){
  alert("Added to Cart");
  location.reload();
}