const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const favoritesData = JSON.parse(localStorage.getItem("favorites")) || {};

if (!loggedInUser) {
  alert("Please log in to view your favorites.");
} else {
  const username = loggedInUser.username;
  const userFavorites = favoritesData[username] || [];

  fetch("json/movies.json")
    .then((response) => response.json())
    .then((data) => {
      const favourites = document.getElementById("favourites");

      data.catalog.forEach((movie) => {
        if (userFavorites.includes(movie.movieID)) {
          const link = document.createElement("a");
          link.href = `specific_film.html?id=${movie.movieID}`;

          const movieImage = document.createElement("img");
          movieImage.src = movie.poster;
          movieImage.classList.add("homepage-movie-image");

          link.appendChild(movieImage);
          favourites.appendChild(link);
        }
      });

      if (userFavorites.length === 0) {
        favourites.innerHTML = "<p>You haven't liked any movies yet.</p>";
      }
    })
    .catch((error) => {
      console.error("Error", error);
    });
}
