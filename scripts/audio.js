document.getElementById('volumeSlider').addEventListener('input', function(e) {
    const audio = document.getElementById('bgMusic');
    if(audio) {
        audio.volume = e.target.value;
    }
});

function toggleMusic(play) {
    const audio = document.getElementById('bgMusic');
    const bars = document.querySelectorAll('.v-bar');
    
    if (play) {
        audio.play().then(() => {
            bars.forEach(bar => bar.classList.add('animating'));
        }).catch(err => {
            console.log("Audio play failed:", err);
        });
    } else {
        audio.pause();
        bars.forEach(bar => bar.classList.remove('animating'));
    }
}