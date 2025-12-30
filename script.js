document.addEventListener("DOMContentLoaded", () => {

    /***********************
     * PASSWORD & AUDIO
     ***********************/
    const correctPassword = "2009";
    const audio = document.getElementById("bgMusic");
    const overlay = document.getElementById("overlay");
    const mainContent = document.getElementById("mainContent");

    window.checkPassword = () => {
        const input = document.getElementById("password").value;
        const error = document.getElementById("passwordError");

        if (input === correctPassword) {
            overlay.style.display = "none";
            mainContent.style.display = "block";

            if (audio) {
                audio.volume = 0.6;
                audio.play().catch(() => {
                    console.log("Autoplay diblokir browser");
                });
            }
        } else {
            error.textContent = "Kata sandi salah ❤️";
        }
    };

    /***********************
     * KUIS
     ***********************/
    window.checkAnswer = () => {
        const answer = document.getElementById("answer").value.toLowerCase();
        const result = document.getElementById("result");

        result.textContent =
            answer === "pink"
                ? "Benar! Kamu mengenal cinta ini 💕"
                : "Salah, coba ingat lagi 😘";
    };

    /***********************
     * BOOK 3D
     ***********************/
    let currentPage = 0;
    const pages = document.querySelectorAll(".book-3d .page");

    function updateBook() {
        pages.forEach((page, index) => {
            page.classList.remove("active", "prev", "next");

            if (index === currentPage) page.classList.add("active");
            else if (index < currentPage) page.classList.add("prev");
            else page.classList.add("next");
        });
    }

    window.nextPage = () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updateBook();
        }
    };

    window.prevPage = () => {
        if (currentPage > 0) {
            currentPage--;
            updateBook();
        }
    };

    updateBook();

    /***********************
     * HEARTS
     ***********************/
    const hearts = document.getElementById("hearts");

    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 3 + Math.random() * 3 + "s";
        hearts.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }, 500);

});
