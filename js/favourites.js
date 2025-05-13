fetch("json/movies.json")
  .then((response) => response.json())
  .then((data) => {
    const favourites = document.getElementById("favourites");

    data.catalog.forEach((movie) => {
      const movieImage = document.createElement("img");
      movieImage.src = movie.Poster;
      movieImage.alt = movie.movieName;
      movieImage.classList.add("homepage-movie-image");
      //placing images on the html(kinda)
      if (movie.Category === "Serious Caroussel") {
        favourites.appendChild(movieImage);
      }
    });
  })
  //  checking for errors
  .catch((error) => {
    console.error("Error", error);
  });
