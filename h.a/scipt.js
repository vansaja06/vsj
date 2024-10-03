document.addEventListener('DOMContentLoaded', () => {
    const text = ["Human", "Guitarist", "Bassist", "Drummer", "Musician"];
    const typingText = document.querySelector('.typing-text span');
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

        function type() {
        if (isDeleting) {
            currentText = text[index].substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = text[index].substring(0, charIndex + 1);
            charIndex++;
        }

        typingText.textContent = currentText;

        if (!isDeleting && charIndex === text[index].length) {
            isDeleting = true;
            setTimeout(type, 1000); // Delay sebelum mulai menghapus
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % text.length; // Pergi ke kata berikutnya
            setTimeout(type, 500); // Delay sebelum mulai mengetik
        } else {
            setTimeout(type, isDeleting ? 100 : 150); // Kecepatan saat mengetik
        }
    }

    type(); // Mulai efek
});
