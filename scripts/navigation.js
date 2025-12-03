function switchToViewer() {
    document.getElementById('mainLayout').style.display = 'none';
    document.getElementById('viewerLayout').style.display = 'flex';
}

function switchToMain() {
    document.getElementById('viewerLayout').style.display = 'none';
    document.getElementById('mainLayout').style.display = 'flex';
}