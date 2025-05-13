/* "EVIDENCE" BUTTON */
const evidenceButton = document.querySelector(".evidence");
const evidenceDropDown = document.querySelector(".dropdown-evidence");

evidenceButton.addEventListener("click", function (event) {
  evidenceDropDown.classList.toggle("dropdown-evidence-show");
});

/* "APPEAL THIS" BUTTON */
const appealButton = document.querySelector(".appeal-this");
const appealDropDown = document.querySelector(".dropdown-appeal-this");

appealButton.addEventListener("click", function (event) {
  appealDropDown.classList.toggle("dropdown-appeal-this-show");
});

// fetch("json/movies.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const param = window.location.search;
//     const urlParams = new URLSearchParams(param);
//     const filmID = urlParams.get("id");

//     const movie = data.catalog.find(
//       (movie) => movie.movieID === parseInt(filmID)
//     );

//   })
//   .catch((error) => {
//     console.error("Error fetching movie data:", error);
//   });

async function loadMovieData() {
  const catalogResponse = await fetch("json/movies.JSON");
  const movieCatalog = await catalogResponse.json();
  movies = movieCatalog.catalog;

  const infoResponse = await fetch("json/movieInfo.json");
  const movieDescription = await infoResponse.json();
  data = movieDescription.descriptions;
}

const movie = getMovieById(movies, filmID);
const description = getDescriptionById(descriptions, filmID);
if (movie) {
  document.querySelector(".specific-film-movie-image").src = movie.picture;
  document.querySelector(".page-heading").innerText = movie.movieName;
  document.querySelector(".specific-film-poster-image").src = movie.poster;
  document.querySelector(".opening-arguments-text").innerText = movie.synopsis;
} else {
  console.error("Movie not found!");
}
if (data) {
  document.querySelector(".specific-film-movie-image").src = data.picture;
  document.querySelector(".opening-arguments-text").innerText = movie.synopsis;
} else {
  console.error("data not found!");
}
