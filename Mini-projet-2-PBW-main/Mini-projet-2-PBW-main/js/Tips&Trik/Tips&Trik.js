// Mobile sidebar toggle
const mobileToggle = document.querySelector(".mobile-toggle");
const sidebar = document.querySelector(".sidebar");

mobileToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Video card click event for YouTube videos
const videoCards = document.querySelectorAll(".video-card");
const videoModal = document.getElementById("videoModal");
const videoIframe = document.getElementById("videoIframe");
const closeModal = document.getElementById("closeModal");

videoCards.forEach((card) => {
  card.addEventListener("click", () => {
    const videoId = card.getAttribute("data-video-id");
    videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    videoModal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  videoModal.style.display = "none";
  videoIframe.src = ""; // Stop the video when modal is closed
  document.body.style.overflow = "auto"; // Re-enable scrolling
});

// Close modal when clicking outside the content
videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none";
    videoIframe.src = "";
    document.body.style.overflow = "auto";
  }
});

// Close modal with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && videoModal.style.display === "flex") {
    videoModal.style.display = "none";
    videoIframe.src = "";
    document.body.style.overflow = "auto";
  }
});
