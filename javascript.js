//getting the info drom the json files
fetch("movies.json")
  .then((response) => response.json())
  .then((data) => {
    const recentVerdicts = document.getElementById("recent-verdicts");
    const upcomingTrials = document.getElementById("upcoming-trials");

    data.catalog.forEach((movie) => {
      const movieImage = document.createElement("img");
      movieImage.src = movie.Poster;
      movieImage.alt = movie.movieName;
      movieImage.classList.add("homepage-movie-image");
      //placing images on the html(kinda)
      if (movie.Category === "Serious Caroussel") {
        recentVerdicts.appendChild(movieImage);
      }
      if (movie.Category === "Girly Caroussel") {
        upcomingTrials.appendChild(movieImage);
      }
    });
  })
  //  checking for errors
  .catch((error) => {
    console.error("Error", error);
  });
