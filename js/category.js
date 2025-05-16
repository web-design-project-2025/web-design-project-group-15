fetch("./json/movies.json")
  .then((response) => response.json())
  .then((data) => {
    const chickFlick = document.getElementById("chickFlick");
    const horror = document.getElementById("horror");
    const nostalgic = document.getElementById("nostalgic");
    const serious = document.getElementById("serious");
    const loadImagesPromises = [];

    data.catalog.forEach((movie) => {
      const link = document.createElement("a");
      link.href = `specific_film.html?id=${movie.movieID}`;

      const movieImage = document.createElement("img");
      movieImage.src = movie.poster;
      movieImage.alt = movie.movieName;
      movieImage.classList.add("homepage-movie-image");
      link.appendChild(movieImage);

      const imageLoadPromise = new Promise((resolve) => {
        movieImage.onload = resolve;
        movieImage.onerror = resolve;
      });
      loadImagesPromises.push(imageLoadPromise);

      if (movie.category === "Girly Caroussel") chickFlick.appendChild(link);
      if (movie.category === "Horror") horror.appendChild(link);
      if (movie.category === "Nostalgic Caroussel") nostalgic.appendChild(link);
      if (movie.category === "Serious Caroussel") serious.appendChild(link);
    });

    Promise.all(loadImagesPromises).then(() => {
      // Initialize scroll position to 0 after images load
      chickFlick.scrollLeft = 0;
      horror.scrollLeft = 0;
      nostalgic.scrollLeft = 0;
      serious.scrollLeft = 0;
    });
  })
  .catch((error) => {
    console.error("Error", error);
  });

function scrollCategory(containerId, direction) {
  const container = document.getElementById(containerId);
  const scrollAmount = 200; // Adjust based on image width
  container.scrollLeft += direction * scrollAmount;
}
