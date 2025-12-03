function updateClock() {
    var now = new Date();
    var timeString = now.toLocaleTimeString('tr-TR');
    var dateString = now.toLocaleDateString('tr-TR');
    const clockElement = document.getElementById('liveClock');
    if(clockElement) {
        clockElement.innerHTML = dateString + "<br>" + timeString;
    }
}
setInterval(updateClock, 1000); 
updateClock();