// Song List

const songs = [
    {
        title: "🎵Dream Waves",
        artist: "by Allen",
        src: "songs/song1.mp3",
        cover: "images/nature..webp"
    },
    {
        title: "🎵Nature Melody",
        artist:"by Robert",
        src: "songs/soundreality-street-rain-548067.mp3",
        cover: "images/cover..webp"
    },
    {
        title: "🎵Silent Forest",
        artist: "by Shakespear",
        src: "songs/sound.mpeg",
        cover: "images/cover.webp"
    }
];

// Select Elements

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const title = document.getElementById("song-title");
const artist = document.getElementById("artist-name");
const cover = document.getElementById("cover");

let currentSong = 0;
let isPlaying = false;

// Load Song

function loadSong(index) {

    audio.src = songs[index].src;
    title.textContent = songs[index].title;
    artist.textContent = songs[index].artist;
    cover.src = songs[index].cover;
}

loadSong(currentSong);

// Play / Pause

function playPause() {

    if (isPlaying) {

        audio.pause();

        playBtn.innerHTML = '<i class="fas fa-play"></i>';

        isPlaying = false;

    } else {

        audio.play();

        playBtn.innerHTML = '<i class="fas fa-pause"></i>';

        isPlaying = true;
    }
}

// Next Song

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);

    audio.play();

    playBtn.innerHTML = '<i class="fas fa-pause"></i>';

    isPlaying = true;
}

// Previous Song

function previousSong() {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);

    audio.play();

    playBtn.innerHTML = '<i class="fas fa-pause"></i>';

    isPlaying = true;
}

// Progress Bar Update

audio.addEventListener("timeupdate", () => {

    if (audio.duration) {

        progress.value =
            (audio.currentTime / audio.duration) * 100;

    }
});

// Seek Song

progress.addEventListener("input", () => {

    audio.currentTime =
        (progress.value / 100) * audio.duration;

});

// Volume Control

volume.addEventListener("input", () => {

    audio.volume = volume.value;

});

// Auto Play Next Song

audio.addEventListener("ended", () => {

    nextSong();

});