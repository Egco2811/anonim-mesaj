document.getElementById('volumeSlider').addEventListener('input', function(e) {
    const audio = document.getElementById('bgMusic');
    if(audio) {
        audio.volume = e.target.value;
    }
});