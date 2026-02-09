const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let scale = 1;

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 60 - 30;

    scale *= 0.9;

    noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            background:linear-gradient(135deg,#ff9a9e,#fad0c4);
            text-align:center;
            font-family:Arial;
        ">
            <h1>💖 Sapevo che avresti detto sì! 💖<br><br>
            Preparati, ti porto a cena 😘</h1>
        </div>
    `;
});
