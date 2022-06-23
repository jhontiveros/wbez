let btn = document.querySelector('button');
let content = document.querySelector(".detail-content")

btn.addEventListener('click', () => {
    if(content.style.display !== 'block'){
        content.style.display = 'block';
    }else {
        content.style.display = 'none';
    }
})

let leadPlayBtn = document.querySelector('#playBtn');
let leadPauseBtn = document.querySelector('#pauseBtn');
let audioPlayer = document.querySelector(".audio-player");

leadPlayBtn.addEventListener('click', () => {
    audioPlayer.style.display = 'grid';
    if(leadPlayBtn.style.display !== 'none'){
        leadPlayBtn.style.display = 'none';
        leadPauseBtn.style.display = 'block';
    }
    if (audio.paused) {
        playBtn.classList.remove("play");
        playBtn.classList.add("pause");
        audio.play();
      } else {
        playBtn.classList.remove("pause");
        playBtn.classList.add("play");
        audio.pause();
      }
})

leadPauseBtn.addEventListener('click', () => {
    audioPlayer.style.display = 'grid';
    if(leadPauseBtn.style.display !== 'none'){
        leadPauseBtn.style.display = 'none';
        leadPlayBtn.style.display = 'block';
    }
    if (audio.paused) {
        playBtn.classList.remove("play");
        playBtn.classList.add("pause");
        audio.play();
      } else {
        playBtn.classList.remove("pause");
        playBtn.classList.add("play");
        audio.pause();
      }
})

let exitBtn = document.querySelector('.exit');

exitBtn.addEventListener('click', () => {
    audioPlayer.style.display = 'none';
    leadPauseBtn.style.display = 'none';
    leadPlayBtn.style.display = 'block';
})

let audio = new Audio(
  "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
);

let timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
  let timelineWidth = window.getComputedStyle(timeline).width;
  let timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false
);

let playBtn = audioPlayer.querySelector(".controls .toggle-play");
playBtn.addEventListener(
  "click", () => {
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      leadPlayBtn.style.display = 'none';
      leadPauseBtn.style.display = 'block';
      audio.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      leadPlayBtn.style.display = 'block';
      leadPauseBtn.style.display = 'none';
      audio.pause();
    }
  }, false
);

setInterval(() => {
    let progressBar = audioPlayer.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  }, 500);