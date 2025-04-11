let images = [
    'images/projectfactory (1).png',
    'images/projectfactory (2).png',
    'images/projectfactory (3).png'];
let currentImageIndex = 0;

// Preload images and ensure they are fully loaded
let preloadedImages = [];
images.forEach((src, index) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
        console.log(`Image ${index + 1} loaded: ${src}`);
        preloadedImages.push(img);
    };
});

function changeBackground() {
    // Only change the background if all images are preloaded
    if (preloadedImages.length === images.length) {
        //console.log(`Changing background to: ${images[currentImageIndex]}`);
        document.body.style.backgroundImage = "url(\"" + images[currentImageIndex] + "\")";

        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
}
//document.body.style.backgroundImage = "url('images/scrapforge (2).png')";

setInterval(changeBackground, 6000); // Change image every 5 seconds
