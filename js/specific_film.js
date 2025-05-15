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

function getMovieById(movieArray, id) {
  return movieArray.find((movie) => movie.movieID === id);
}

function getDescriptionById(descArray, id) {
  return descArray.find((desc) => desc.movieID === id);
}
async function loadMovieData() {
  const catalogResponse = await fetch("json/movies.json");
  const movieCatalog = await catalogResponse.json();
  movies = movieCatalog.catalog;

  const infoResponse = await fetch("json/movieInfo.json");
  const movieDescription = await infoResponse.json();
  descriptions = movieDescription.descriptions;

  const param = window.location.search;
  const urlParams = new URLSearchParams(param);
  const filmID = parseInt(urlParams.get("id"));

  const movie = getMovieById(movies, filmID);
  const description = getDescriptionById(descriptions, filmID);

  if (movie) {
    document.querySelector(".page-heading").innerText = movie.movieName;
  } else {
    console.error("Movie not found!");
  }

  if (description) {
    document.querySelector(".specific-film-movie-image").src =
      description.picture;
    document.querySelector(".specific-film-poster-image").src =
      description.evidencePicture;
    document.querySelector(".opening-arguments-text").innerText =
      description.synopsis;
  } else {
    console.error("data not found!");
  }
}

loadMovieData();
