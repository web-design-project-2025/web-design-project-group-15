/* "EVIDENCE" BUTTON */
const evidenceButton = document.querySelector(".evidence");
const evidenceDropDown = document.querySelector(".dropdown-evidence");

let filmID;

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
  const catalogResponse = await fetch("./json/movies.JSON");
  const movieCatalog = await catalogResponse.json();
  movies = movieCatalog.catalog;

  const infoResponse = await fetch("./json/movieInfo.json");
  const movieDescription = await infoResponse.json();
  descriptions = movieDescription.descriptions;

  const param = window.location.search;
  const urlParams = new URLSearchParams(param);
  filmID = parseInt(urlParams.get("id"));
  if (loggedInUser) {
    const username = loggedInUser.username;
    const userFavorites = favorites[username] || [];

    if (userFavorites.includes(filmID)) {
      likeHeart.src = "img/redHeart.png";
    }
  }

  const movie = getMovieById(movies, filmID);
  const description = getDescriptionById(descriptions, filmID);

  if (movie) {
    document.querySelector(".page-heading").innerText = movie.movieName;
  } else {
    console.error("Movie not found!");
  }
  const verdictImage = document.querySelector(".specific-film-verdict-image");
  if (movie.category === "Serious Caroussel") {
    verdictImage.src = "img/classic.png";
  } else if (movie.category === "Girly Caroussel") {
    verdictImage.src = "img/chickflick.png";
  } else if (movie.category === "Nostalgic Caroussel") {
    verdictImage.src = "img/kids.png";
  }

  if (description) {
    document.querySelector(".specific-film-movie-image").src =
      description.picture;
    document.querySelector(".specific-film-poster-image").src =
      description.evidencePicture;
    document.querySelector(".opening-arguments-text").innerText =
      description.synopsis;
    document.querySelector(".testimony-text").innerText = description.evidence;
    document.querySelector(".witness1-text").innerText = description.witness1;
    document.querySelector(".witness2-text").innerText = description.witness2;
  } else {
    console.error("data not found!");
  }
}

loadMovieData();

// like Button
const likeButton = document.getElementById("likeButton");
const likeHeart = document.getElementById("likeHeart");

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const favorites = JSON.parse(localStorage.getItem("favorites")) || {};

likeButton.addEventListener("click", () => {
  if (!loggedInUser) {
    alert("Please log in to like movies.");
    return;
  }

  const username = loggedInUser.username;
  const userFavorites = favorites[username] || [];
  const isFavorited = userFavorites.includes(filmID);

  if (isFavorited) {
    userFavorites.splice(userFavorites.indexOf(filmID), 1);
    likeHeart.src = "img/emptyHeart.png";
  } else {
    userFavorites.push(filmID);
    likeHeart.src = "img/redHeart.png";
  }

  favorites[username] = userFavorites;
  localStorage.setItem("favorites", JSON.stringify(favorites));
});
