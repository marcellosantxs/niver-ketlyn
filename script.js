const photos = [
  {
    image: "images/foto1.jpg",
    text: "✨ Hoje é um dia especial porque é o seu dia. Que ele seja cheio de momentos felizes."
  },
  {
    image: "images/foto2.jpg",
    text: "😊 Seu jeito torna os momentos mais leves e divertidos. Nunca perca essa essência."
  },
  {
    image: "images/foto3.jpg",
    text: "🌻 Algumas pessoas aparecem na nossa vida e deixam lembranças que valem a pena guardar."
  },
  {
    image: "images/foto4.jpg",
    text: "🎉 Que este novo ciclo traga muitas conquistas, alegrias e sonhos realizados."
  },
  {
    image: "images/foto5.jpg",
    text: "❤️ Obrigado pelos momentos compartilhados. Que seu aniversário seja tão especial quanto você."
  }
];

let currentPhoto = 0;

const welcomeScreen = document.getElementById("welcome-screen");
const galleryScreen = document.getElementById("gallery-screen");
const finalScreen = document.getElementById("final-screen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const photoElement = document.getElementById("photo");
const messageElement = document.getElementById("message");

function loadPhoto(index) {
  photoElement.src = photos[index].image;
  messageElement.textContent = photos[index].text;
}

startBtn.addEventListener("click", () => {
  welcomeScreen.classList.remove("active");
  galleryScreen.classList.add("active");
  loadPhoto(currentPhoto);
});

nextBtn.addEventListener("click", () => {
  currentPhoto++;

  if (currentPhoto >= photos.length) {
    galleryScreen.classList.remove("active");
    finalScreen.classList.add("active");
    return;
  }

  loadPhoto(currentPhoto);
});

prevBtn.addEventListener("click", () => {
  if (currentPhoto > 0) {
    currentPhoto--;
    loadPhoto(currentPhoto);
  }
});

/* Corações animados */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 500);