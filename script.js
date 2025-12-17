const imageFolder = "assets/img/gallery/";
const carouselContent = document.getElementById("carouselContent");

// Auto-slide every 4 seconds
const carousel = new bootstrap.Carousel(document.getElementById("galleryCarousel"), {
  interval: 4000,
  ride: "carousel",
  pause: false
});

// Auto-detect images from server
const allImages = [
  "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg",
    "foto7.jpg",
    "foto8.jpg"
];

createCarousel(allImages);

function createCarousel(images) {
  let slideIndex = 0;

  for (let i = 0; i < images.length; i += 3) {

    const slide = document.createElement("div");
    slide.className = "carousel-item" + (slideIndex === 0 ? " active" : "");

    const row = document.createElement("div");
    row.className = "row g-3";

    images.slice(i, i + 3).forEach(image => {

      const col = document.createElement("div");
      col.className = "col-md-4 col-6";

      const img = document.createElement("img");
      img.src = imageFolder + image;
      img.className = "img-fluid rounded shadow gallery-img";
      img.style.cursor = "pointer";

      // Fullscreen on click
      img.addEventListener("click", () => {
        openFullscreen(img.src);
      });

      col.appendChild(img);
      row.appendChild(col);
    });

    slide.appendChild(row);
    carouselContent.appendChild(slide);

    slideIndex++;
  }
}

// Fullscreen Viewer
const viewer = document.getElementById("fullscreenViewer");
const viewerImg = document.getElementById("fullscreenImage");
const closeBtn = document.getElementById("closeViewer");

function openFullscreen(src) {
  viewer.style.display = "flex";
  viewerImg.src = src;
}

closeBtn.addEventListener("click", () => {
  viewer.style.display = "none";
});

viewer.addEventListener("click", (e) => {
  if (e.target === viewer) {
    viewer.style.display = "none";
  }
});

// Countdown naar 2 mei om 20:00
const eventDate = new Date("May 2, 2026 20:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "<h4>Het feest is begonnen! 🎉</h4>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

