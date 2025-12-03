const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
let lastStarTime = 0;

document.addEventListener('mousemove', function(e) {
    const now = Date.now();
    if (now - lastStarTime < 50) return; 
    
    lastStarTime = now;

    const star = document.createElement('div');
    star.className = 'star-trail';
    star.innerHTML = '★'; 
    
    star.style.left = e.pageX + 'px';
    star.style.top = e.pageY + 'px';
    star.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 1000);
});