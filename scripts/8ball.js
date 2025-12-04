function ask8Ball() {
    const question = document.getElementById('ballQuestion').value;
    if (question.trim() === "") {
        alert("Önce bir soru sormalısın!");
        return;
    }

    const answers = [
        "Evet",
        "Hayır",
        "Belki",
        "Kesin",
        "Şüpheli",
        "Tekrar Sor",
        "İmkansız",
        "Olabilir"
    ];

    const ball = document.getElementById('magicBall');
    const answerText = document.getElementById('ballAnswer');
    
    ball.style.animation = "shake 0.5s";
    answerText.innerText = "...";

    setTimeout(() => {
        ball.style.animation = "none";
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        answerText.innerText = randomAnswer;
    }, 500);
}