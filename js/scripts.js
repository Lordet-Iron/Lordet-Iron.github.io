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
        const randomSrc = videoSources[Math.floor(Math.random() * videoSources.length)];
        video.src = randomSrc;

        video.load(); // Force reload the video

        video.addEventListener("loadedmetadata", () => {
            const maxStart = Math.max(video.duration - 10, 0);
            const randomStart = Math.random() * maxStart;
            video.currentTime = randomStart;

            // Wait until the video has successfully sought before playing
            video.addEventListener("seeked", () => {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(err => console.warn("Autoplay blocked or failed:", err));
                }

                // Schedule next switch
                setTimeout(() => {
                    playRandomSegment();
                }, 10000);
            }, { once: true });
        }, { once: true });
    }

    playRandomSegment();
});



