function generatePopup() {
    const input = document.getElementById('rawInput').value;
    if(input.trim() === "") return;

    const formatted = input.replace(/\n/g, "<br>");
    
    document.getElementById('messageOutput').innerHTML = formatted;
    
    const fallbackImg = document.getElementById('generated-msg-img');
    const fallbackMsg = document.getElementById('fallback-msg');
    if(fallbackImg) fallbackImg.remove();
    if(fallbackMsg) fallbackMsg.remove();
    
    document.getElementById('overlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}

function copyImage() {
    const container = document.querySelector("div[data-html2canvas-ignore='true']");
    const btn = container ? container.querySelectorAll("button")[1] : null;
    const originalText = btn ? btn.innerText : "Resim Olarak Kopyala";
    
    if(btn) {
        btn.disabled = true;
        btn.innerText = "Hazırlanıyor...";
    }

    const element = document.querySelector(".popup-window");
    
    html2canvas(element, {
        backgroundColor: null, 
        scale: 2 
    }).then(canvas => {
        canvas.toBlob(blob => {            
            if (navigator.clipboard && navigator.clipboard.write && typeof ClipboardItem !== "undefined") {
                try {
                    const item = new ClipboardItem({ 'image/png': blob });
                    navigator.clipboard.write([item]).then(() => {
                        alert("Resim panoya kopyalandı!");
                        resetBtn(btn, originalText);
                    }).catch(err => {
                        console.warn("Clipboard write failed (likely browser restriction):", err);
                        showFallback(canvas);
                        resetBtn(btn, originalText);
                    });
                } catch (e) {
                    console.warn("ClipboardItem creation failed:", e);
                    showFallback(canvas);
                    resetBtn(btn, originalText);
                }
            } else {
                showFallback(canvas);
                resetBtn(btn, originalText);
            }
        }, 'image/png');
    });
}

function resetBtn(btn, text) {
    if(btn) {
        btn.disabled = false;
        btn.innerText = text;
    }
}

function showFallback(canvas) {
    const ignoreContainer = document.querySelector("div[data-html2canvas-ignore='true']");
    
    if(!ignoreContainer) return;

    let existingImg = document.getElementById('generated-msg-img');
    if(existingImg) existingImg.remove();
    let existingMsg = document.getElementById('fallback-msg');
    if(existingMsg) existingMsg.remove();

    const msg = document.createElement('p');
    msg.id = 'fallback-msg';
    msg.style.marginTop = "15px";
    msg.style.fontSize = "12px";
    msg.style.fontWeight = "bold";
    msg.style.color = "#ffff00";
    msg.innerText = "Otomatik kopyalanamadı. Resme basılı tutup kaydedin:";
    
    const img = document.createElement('img');
    img.id = 'generated-msg-img';
    img.src = canvas.toDataURL();
    img.style.maxWidth = "100%";
    img.style.border = "2px solid white";
    img.style.marginTop = "5px";
    img.style.display = "block";
    img.style.marginLeft = "auto";
    img.style.marginRight = "auto";

    ignoreContainer.appendChild(msg);
    ignoreContainer.appendChild(img);
    
    alert("Resim oluşturuldu. Aşağıdan kaydedebilirsiniz.");
}