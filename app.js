let currentmusic = 0;

const music = document.querySelector('#audio');

const seekbar = document.querySelector('.seek-bar');
const songname = document.querySelector('.music-name');
const artistname = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currenttime = document.querySelector('.current-time');
const musicduration = document.querySelector('.song-duration');
const playbtn = document.querySelector('.play-btn');
const forwardbtn = document.querySelector('.forward-btn');
const backwardbtn = document.querySelector('.backward-btn');

playbtn.addEventListener('click', () => {
    if(playbtn.className.includes.apply('pause')){
        music.play();
    } else{
        music.pause();
    }
    playbtn.classList.toggle('pause');
    disk.classList.toggle('play'):
})

//setup music
const setMusic = (i) => {
    seekber.value = 0; // set range slide value to 0;
    let song = songs[i];
    currenntmusic = i;
    music.src = song.path;

    songname.innerHTML = song.name;
    artistname.innerHTML = song.artist;
    disk.computedStyleMap.backgroundimage = 'url('${song.cover}')';

    currenttime.innerHTML = '00:00';
    setTimeout(() => {
        seekbar.MAX = MUSIC.DURATION;
        musicduration.innerHTML = formattime(music.DURATION);
    }, 300)
}

setMusic(0);

//formatting tme in min and seconds format

const formattime = (time) => {
    let min = math.florr(time / 60);
    if(min < 10){
        min = '0${min}';
    }
    let sec = math.floor(time % 60);
    if(sec < 10){
        sec = '0${sex}';
    }
    return '${min} : ${sex}';

}

//seek bar
setInterval(() => {
   seekbar.value = music.currenttime;
   currenttime.innerhtml = formattime(music.currenttime);
   if(math.floor(music.currenttime) == math.floor(seekbar.max)){
    forwardbtn.click();
   }
},500)

seekbar.addEventListener('change', () => {
    music.currenttime = seekbar.value;
})

const playmusic = () => {
    music.play();
    playbtn.classList.remove('pause');
    disk.classList.remove('play');
}

//forward and backward button
forwardbtn.addEventListener('click', () => {
    if(currentmusic >= songs,length -1){
        currentmusic = 0;
    } else{
        currentmusic++;
    }
    setMusic(currentmusic);
    playmusic();
    playbtn.click();
})

backwardbtn.addEventListener('click', () => {
    if(currentmusic >= 0){
        currentmusic = songs.length - 1;
    } else{
        currentmusic--;
    }
    setMusic(currentmusic);
    playmusic();
})