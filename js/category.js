fetch("json/movies.json")
  .then((response) => response.json())
  .then((data) => {
    const chickFlick = document.getElementById("chickFlick");
    const horror = document.getElementById("horror");
    const nostalgic = document.getElementById("nostalgic");
    const serious = document.getElementById("serious");

    data.catalog.forEach((movie) => {
      const link = document.createElement("a");
      link.href = `specific_film.html?id=${movie.movieID}`;

      const movieImage = document.createElement("img");
      movieImage.src = movie.poster;
      movieImage.alt = movie.movieName;
      movieImage.classList.add("homepage-movie-image");
      link.appendChild(movieImage);
      //placing images on the html(ChickFlick)
      if (movie.category === "Girly Caroussel") {
        chickFlick.appendChild(link);
      }
      //   placing the Horror Films(not a category yet)
      if (movie.category === "Horror") {
        horror.appendChild(link);
      }
      // placing Nostalgic Films
      if (movie.category === "Nostalgic Caroussel") {
        nostalgic.appendChild(link);
      }
      //placing serious Films
      if (movie.category === "Serious Caroussel") {
        serious.appendChild(link);
      }

      //

      //   if (movie.category === "Serious Caroussel") {
      //     upcomingTrials.appendChild(link);
      //   }
    });
  })
  //  checking for errors
  .catch((error) => {
    console.error("Error", error);
  });
