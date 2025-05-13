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
