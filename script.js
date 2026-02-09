const btnA = document.querySelector(".button1");
const btnP = document.querySelector(".button2");
const msgs = document.querySelectorAll(".message");

// ajouter bouton fermer
msgs.forEach(m => {
  m.innerHTML += '<button class="close-btn">✕</button>';
  m.querySelector(".close-btn").onclick = () => m.style.display = "none";
});

btnA.onclick = e => {
  e.preventDefault();
  msgs[0].style.display = "block";
  msgs[1].style.display = "none";
};

btnP.onclick = e => {
  e.preventDefault();
  msgs[1].style.display = "block";
  msgs[0].style.display = "none";
};

