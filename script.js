// ================================
// MUSIC
// ================================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {

    if (music.paused) {

        music.play()
            .then(function () {

                musicBtn.innerHTML = "⏸️ Pause Music";

            })
            .catch(function () {

                alert(
                    "The music could not be played. The Chosic link may not be a direct audio file."
                );

            });

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

    }

}


// ================================
// OPEN SURPRISE
// ================================

function showSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.classList.add("show");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    // Start music when surprise is opened
    if (music.paused) {

        music.play()
            .then(function () {

                musicBtn.innerHTML = "⏸️ Pause Music";

            })
            .catch(function () {

                console.log("Music could not be played.");

            });

    }

    // Celebration
    createConfetti(60);
    createHearts(30);
}


// ================================
// CREATE ONE HEART
// ================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart-float");

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💓",
        "💘"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 8000);
}


// ================================
// CREATE MANY HEARTS
// ================================

function createHearts(number) {

    for (let i = 0; i < number; i++) {

        setTimeout(function () {

            createHeart();

        }, i * 100);

    }

}


// ================================
// CONFETTI
// ================================

function createConfetti(number) {

    for (let i = 0; i < number; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add(
            "confetti-piece"
        );

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.backgroundColor =
            `hsl(
                ${Math.random() * 360},
                100%,
                60%
            )`;

        confetti.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        confetti.style.width =
            (5 + Math.random() * 8) + "px";

        confetti.style.height =
            (8 + Math.random() * 12) + "px";

        document.body.appendChild(confetti);

        setTimeout(function () {

            confetti.remove();

        }, 6000);

    }

}


// ================================
// AUTOMATIC HEARTS
// ================================

setInterval(
    createHeart,
    900
);


// ================================
// INITIAL CELEBRATION
// ================================

createHearts(15);

createConfetti(30);