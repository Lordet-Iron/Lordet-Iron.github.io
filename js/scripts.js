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
            const maxStart = Math.max(video.duration - 20, 0);
            const randomStart = Math.random() * maxStart;
            video.currentTime = randomStart;

            // Wait until the video has successfully sought before playing
            video.addEventListener("seeked", () => {
                video.play();

                // Hide the placeholder gracefully
                const placeholder = document.getElementById("video-placeholder");
                if (placeholder) {
                    placeholder.style.transition = "opacity 0.5s ease";
                    placeholder.style.opacity = "0";
                    setTimeout(() => {
                        placeholder.style.display = "none";
                    }, 500);
                }

                setTimeout(() => {
                    playRandomSegment(); // Play next video segment after 10s
                }, 10000);
            });
        }, { once: true });
    }

    playRandomSegment();
});



