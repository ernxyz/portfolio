const body = document.querySelector("body");
const welcomeSection = document.querySelector("#welcome-section");

const myPic = document.getElementById("square-me");
const h1 = document.querySelector("#welcome-section > h1");
const p = document.querySelector("#welcome-section > p");
const myInfo = document.querySelectorAll(".my-info");

myPic.addEventListener('click', function(){
  myPic.classList.toggle('move-pic');
  h1.classList.toggle('hide-content');
  p.classList.toggle('hide-content');

  myInfo.forEach((par) => {
    par.classList.toggle('hide-content');
  });
});


// Copiar usuario discord

const discord = document.getElementById('discord');

const modal = document.querySelector('.modal-overlay');
const btnClose = document.querySelector('.close-btn');

discord.addEventListener('click', function(){
  copiarAlPortapapeles('user');
  modal.classList.add('open-modal');
});

btnClose.addEventListener('click', function(){
  modal.classList.remove('open-modal');
});

function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}


// Modal

