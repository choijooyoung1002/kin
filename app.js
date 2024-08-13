let currentmusic = 0;

const music = document.querySelector("#audio");

const seekbar = document.querySelector(".seek-bar");
const songname = document.querySelector(".music-name");
const artistname = document.querySelector(".artist-name");
const disk = document.querySelector(".disk");
const currenttime = document.querySelector(".current-time");
const musicduration = document.querySelector(".song-duration");
const playbtn = document.querySelector(".play-btn");
const forwardbtn = document.querySelector(".forward-btn");
const backwardbtn = document.querySelector(".backward-btn");

playbtn.addEventListener("click", () => {
  if (playbtn.className.includes("pause")) {
    music.play();
  } else {
    music.pause();
  }
  playbtn.classList.toggle("pause");
  disk.classList.toggle("play");
});

//setup music
const setMusic = (i) => {
  seekbar.value = 0; // set range slide value to 0;
  let song = songs[i];
  currenntmusic = i;
  music.src = song.path;

  songname.innerHTML = song.name;
  artistname.innerHTML = song.artist;
  disk.style.backgroundImage = `url('${song.cover}')`;

  currenttime.innerHTML = "00 : 00";
  setTimeout(() => {
    seekbar.max = music.duration;
    musicduration.innerHTML = formattime(music.duration);
  }, 300);
};

setMusic(0);

//formatting tme in min and seconds format

const formattime = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
    min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min} : ${sec}`;
};

//seek bar
setInterval(() => {
  seekbar.value = music.currentTime;
  currenttime.innerHTML = formattime(music.currentTime);
  if (Math.floor(music.currentTime) == Math.floor(seekbar.max)) {
    forwardbtn.click();
  }
}, 500);

seekbar.addEventListener("change", () => {
  music.currentTime = seekbar.value;
});

const playmusic = () => {
  music.play();
  playbtn.classList.toggle("pause");
  disk.classList.toggle("play");
};

//forward and backward button
forwardbtn.addEventListener("click", () => {
  if (currentmusic >= songs.length - 1) {
    currentmusic = 0;
    console.log(currentmusic);
  } else {
    currentmusic++;
    console.log(currentmusic);
  }
  setMusic(currentmusic);
  playmusic();
  playbtn.click();
});

backwardbtn.addEventListener("click", () => {
  if (currentmusic <= 0) {
    currentmusic = songs.length - 1;
  } else {
    currentmusic--;
  }
  setMusic(currentmusic);
  playmusic();
  playbtn.click();
});
