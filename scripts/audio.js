const playlist = [
    "tarkan_simarik.mp3",
    "ninja_tuna.mp3",
];

let currentTrackIndex = 0;
const audio = document.getElementById('bgMusic');
const bars = document.querySelectorAll('.v-bar');

if(audio) {
    audio.volume = 0.5;
    
    audio.addEventListener('ended', function() {
        changeTrack(1);
    });
}

const volumeSlider = document.getElementById('volumeSlider');
if (volumeSlider) {
    volumeSlider.addEventListener('input', function(e) {
        if(audio) {
            audio.volume = e.target.value;
        }
    });
}

function toggleMusic(play) {
    if (!audio) return;

    if (play) {
        if (!audio.getAttribute('src')) {
            audio.src = playlist[currentTrackIndex];
        }

        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                bars.forEach(bar => bar.classList.add('animating'));
            }).catch(err => {
                console.log("Audio play failed (interaction required):", err);
            });
        }
    } else {
        audio.pause();
        bars.forEach(bar => bar.classList.remove('animating'));
    }
}

function changeTrack(direction) {
    if (!audio) return;
    currentTrackIndex += direction;
    if (currentTrackIndex >= playlist.length) {
        currentTrackIndex = 0;
    } else if (currentTrackIndex < 0) {
        currentTrackIndex = playlist.length - 1;
    }
    audio.src = playlist[currentTrackIndex];
    toggleMusic(true);
    
    console.log("Now Playing: " + playlist[currentTrackIndex]);
}