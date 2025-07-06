console.log("Adyan’s Portfolio Loaded.");
const music = new Audio('your-music-file.mp3');
music.loop = true;
music.volume = 0.6;
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    isPlaying = false;
    document.getElementById("music-btn").innerText = "🔇 Music";
  } else {
    music.play();
    isPlaying = true;
    document.getElementById("music-btn").innerText = "🔈 Music";
  }
}
const bgMusic = new Audio('your-music-file.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.5;

window.addEventListener('click', () => {
  bgMusic.play();
}, { once: true });
