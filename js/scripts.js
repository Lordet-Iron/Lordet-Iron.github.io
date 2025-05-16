document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.querySelector(".nav-links");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bgVideo");

    const videoSources = [
        "videos/background-video-1.mp4",
        "videos/background-video-2.mp4",
        "videos/background-video-3.mp4"
    ];

    function playRandomSegment() {
        // Pick a random video
        const randomSrc = videoSources[Math.floor(Math.random() * videoSources.length)];
        video.src = randomSrc;

        // Wait for metadata to load so we can get duration
        video.addEventListener("loadedmetadata", () => {
            const maxStart = Math.max(video.duration - 10, 0); // avoid overflow
            const randomStart = Math.random() * maxStart;

            video.currentTime = randomStart;
            video.play();

            setTimeout(() => {
                playRandomSegment(); // Recursively play the next one
            }, 10000); // 10 seconds
        }, { once: true });
    }

    playRandomSegment();
});


