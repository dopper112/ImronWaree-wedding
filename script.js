document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Music Control
    const musicBtn = document.getElementById('musicBtn');
    const bgMusic = document.getElementById('bgMusic');
    const icon = musicBtn.querySelector('i');
    const text = musicBtn.querySelector('span');
    let isPlaying = false;

    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            text.innerText = "เปิดเสียง";
            musicBtn.classList.remove('music-playing');
        } else {
            bgMusic.play().catch(error => {
                console.log("Auto-play prevented");
            });
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            text.innerText = "ปิดเสียง";
            musicBtn.classList.add('music-playing');
        }
        isPlaying = !isPlaying;
    });

    // 2. Fade In Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});