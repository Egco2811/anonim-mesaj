function showThankYou() {
    var btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.innerText = "Lütfen Bekleyiniz...";

    setTimeout(() => {
        document.getElementById('anonForm').reset(); 
        document.getElementById('success-message').style.display = 'block';
        
        btn.disabled = false;
        btn.innerText = "GÖNDER";

        setTimeout(() => {
            document.getElementById('success-message').style.display = 'none';
        }, 5000); 
    }, 500); 
}