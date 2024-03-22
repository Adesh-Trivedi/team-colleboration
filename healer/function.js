
window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
});

var swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  pagination: {
      el: '.swiper-pagination',
  },
});

document.addEventListener("DOMContentLoaded", function() {
  const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 2100, // Adjust the scrolling speed (in milliseconds)
      speedAsDuration: true // Use the speed as the total duration of the scroll animation
  });
});
const video = document.getElementById("video-background");

// Set playback rate to 0.5 (half speed)
video.playbackRate = 0.5;

document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slider img");
  const navDots = document.querySelectorAll(".slider-nav a");

  navDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      scrollToSlide(index);
    });
  });

  function scrollToSlide(index) {
    slides[index].scrollIntoView({ behavior: "smooth" });
    setActiveDot(index);
  }

  function setActiveDot(index) {
    navDots.forEach(dot => {
      dot.classList.remove("active");
    });
    navDots[index].classList.add("active");
  }
});





function updateCost() {
  var subjectDropdown = document.getElementById("Subject");
  var costDisplay = document.getElementById("costDisplay");
  var selectedSubject = subjectDropdown.value;

  var cost = ""; // Placeholder for cost

  // Determine cost based on selected subject
  switch (selectedSubject) {
      case "Tarot sessions":
          cost = "$1500 for 30 min";
          break;
      case "Oracle card reading included":
          cost = "$3000 for 60 min";
          break;
      case "Past life reading":
          cost = "$2000 for 45 min";
          break;
      case "psychic sessions":
          cost = "$1200 for 30 min";
          break;
      case "Aakashic reading":
          cost = "$1800 for 60 min";
          break;
      case "Mediumship session":
          cost = "$2500 for 60 min";
          break;
      case "Feedback":
          cost = "Free";
          break;
      default:
          cost = "";
  }

  // Update cost in the cost display section
  costDisplay.textContent = "Cost: " + cost;
}
