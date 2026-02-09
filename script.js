const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let scale = 1;

function moveNoButton() {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 100 - 50;

    scale *= 0.85;

    noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
}

noBtn.addEventListener("touchend", (e) => {
    e.preventDefault();
    moveNoButton();
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.fontSize = Math.random() * 20 + 20 + 'px';
    confetti.style.opacity = '1';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    
    const emojis = ['✨', '⭐', '🌟'];
    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    document.body.appendChild(confetti);
    
    const duration = Math.random() * 2 + 2;
    const xMove = Math.random() * 200 - 100;
    
    let startTime = Date.now();
    
    function animate() {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = elapsed / duration;
        
        if (progress >= 1) {
            confetti.remove();
            return;
        }
        
        confetti.style.top = (progress * 100) + 'vh';
        confetti.style.left = (parseFloat(confetti.style.left) + xMove * 0.01) + '%';
        confetti.style.opacity = 1 - progress;
        confetti.style.transform = `rotate(${progress * 360}deg) scale(${1 - progress * 0.5})`;
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

yesBtn.addEventListener("click", () => {
    // Disabilita il bottone dopo il click
    yesBtn.disabled = true;
    noBtn.disabled = true;
    
    // Create multiple confetti pieces
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createConfetti(), i * 30);
    }
    
    setTimeout(() => {
        const resultDiv = document.createElement('div');
        resultDiv.style.cssText = `
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #ffd6e8 0%, #fff5e6 50%, #e8f4f8 100%);
            text-align: center;
            font-family: 'Comic Sans MS', Arial;
            flex-direction: column;
            gap: 20px;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 10000;
        `;
        resultDiv.innerHTML = `
            <h1 style="
                font-size: 48px;
                background: linear-gradient(135deg, #ff69b4, #ff1493);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin: 0;
                letter-spacing: 2px;
            ">Ma guarda un po', pensavo avresti schiacciato sul no...</h1>
            <p style="
                font-size: 28px;
                color: #ff69b4;
                margin: 0;
                animation: bounce 1s infinite;
            ">Preparati pupina, ti porto a cena</p>
            <style>
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
            </style>
        `;
        document.body.appendChild(resultDiv);
    }, 1500);
});
