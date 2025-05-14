//getting the info drom the json files
fetch("js/movies.json")
  .then((response) => response.json())
  .then((data) => {
    const recentVerdicts = document.getElementById("recent-verdicts");
    const upcomingTrials = document.getElementById("upcoming-trials");

    data.catalog.forEach((movie) => {
      const link = document.createElement("a");
      link.href = `specific_film.html?id=${movie.movieID}`;

      const movieImage = document.createElement("img");
      movieImage.src = movie.poster;
      movieImage.alt = movie.movieName;
      movieImage.classList.add("homepage-movie-image");
      link.appendChild(movieImage);
      //placing images on the html(kinda)
      if (movie.category === "Serious Caroussel") {
        recentVerdicts.appendChild(link);
      }
      if (movie.category === "Girly Caroussel") {
        upcomingTrials.appendChild(link);
      }
    });
  })
  //  checking for errors
  .catch((error) => {
    console.error("Error", error);
  });

function autoScrollCarousel(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = [...container.children];
  items.forEach(item => {
    const clone = item.cloneNode(true);
    container.appendChild(clone);
  });

  const scrollSpeed = 1;  // Adjust the speed of scrolling
  let scrollPos = 0;

  function scroll() {
    container.scrollLeft += scrollSpeed;
    scrollPos += scrollSpeed;

    // If the first set of items is off-screen, reset to start without interruption
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;  // Reset the scroll position
    }
  }

  // Call scroll every 10ms for smooth movement
  setInterval(scroll, 10);
}

window.addEventListener('DOMContentLoaded', () => {
  autoScrollCarousel('recent-verdicts');
  autoScrollCarousel('upcoming-trials');
});