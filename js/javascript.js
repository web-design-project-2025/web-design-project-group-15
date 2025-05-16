//getting the info drom the json files
fetch("./json/movies.json")
  .then((response) => response.json())
  .then((data) => {
    const recentVerdicts = document.getElementById("recent-verdicts");
    const upcomingTrials = document.getElementById("upcoming-trials");

    const loadImagesPromises = [];

    data.catalog.forEach((movie) => {
      const link = document.createElement("a");
      link.href = `specific_film.html?id=${movie.movieID}`;

      const movieImage = document.createElement("img");
      movieImage.src = movie.poster;
      movieImage.alt = movie.movieName;
      movieImage.classList.add("homepage-movie-image");
      link.appendChild(movieImage);

      // Create a promise to wait for the image to load
      const imageLoadPromise = new Promise((resolve) => {
        movieImage.onload = resolve;
        movieImage.onerror = resolve; // Resolve even if the image fails to load
      });
      loadImagesPromises.push(imageLoadPromise);

      // Placing images on the HTML
      if (movie.category === "Serious Caroussel") {
        recentVerdicts.appendChild(link);
      }
      if (movie.category === "Girly Caroussel") {
        upcomingTrials.appendChild(link);
      }
    });

    // Wait for all images to load before initializing carousels
    Promise.all(loadImagesPromises).then(() => {
      autoScrollCarousel("recent-verdicts");
      autoScrollCarousel("upcoming-trials");
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function autoScrollCarousel(containerId) {
  const container = document.getElementById(containerId);
  if (!container || container.children.length === 0) return;

  const items = [...container.children];
  if (items.length === 0) return;

  // Clone items to create seamless loop
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    container.appendChild(clone);
  });

  const scrollSpeed = 1; // Pixels per frame
  let isPaused = false;

  function updateScroll() {
    if (isPaused) return;

    container.scrollLeft += scrollSpeed;

    // Recalculate total width dynamically
    const itemWidth = items[0].offsetWidth + 10; // Include margin
    const totalOriginalWidth = items.length * itemWidth;

    // Debug to track scrolling
    console.log(
      `Container: ${containerId}, scrollLeft: ${container.scrollLeft}, totalOriginalWidth: ${totalOriginalWidth}`
    );

    // Reset using modulo for seamless looping
    if (container.scrollLeft >= totalOriginalWidth) {
      container.scrollLeft = container.scrollLeft % totalOriginalWidth;
    }
  }

  // Smooth scrolling every 10ms
  const scrollInterval = setInterval(updateScroll, 10);

  // Pause on hover
  container.addEventListener("mouseenter", () => {
    isPaused = true;
  });
  container.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  // Ensure initial scroll position and behavior
  container.scrollLeft = 0;
  container.style.scrollBehavior = "auto";
}
