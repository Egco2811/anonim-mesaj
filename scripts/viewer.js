function generatePopup() {
    const input = document.getElementById('rawInput').value;
    if(input.trim() === "") return;

    const formatted = input.replace(/\n/g, "<br>");
    
    document.getElementById('messageOutput').innerHTML = formatted;
    document.getElementById('overlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}

function copyImage() {
    const element = document.querySelector(".popup-window");
    html2canvas(element, {
        backgroundColor: null, 
        scale: 2 
    }).then(canvas => {
        canvas.toBlob(blob => {
            navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob })
            ]).then(() => {
                alert("Resim panoya kopyalandı!");
            }).catch(err => {
                console.error("Kopyalama hatası:", err);
                alert("Kopyalama başarısız oldu.");
            });
        });
    });
}