document.addEventListener("DOMContentLoaded", () => {
  const likeButton = document.getElementById("likeButton");
  const likeHeart = document.getElementById("likeHeart");

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const favorites = JSON.parse(localStorage.getItem("favorites")) || {};

  const urlParams = new URLSearchParams(window.location.search);
  const filmID = parseInt(urlParams.get("id"));

  if (loggedInUser) {
    const username = loggedInUser.username;
    const userFavorites = favorites[username] || [];

    if (userFavorites.includes(filmID)) {
      likeHeart.src = "img/redHeart.png";
    } else {
      likeHeart.src = "img/emptyHeart.png";
    }

    likeButton.addEventListener("click", () => {
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
  } else {
    likeButton.addEventListener("click", () => {
      alert("Please log in to like movies.");
    });
  }
});
