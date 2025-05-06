fetch("js/movies.json");

const param = window.location.search;
const urlparams = new URLSearchParams(param);
const filmID = urlparams.get("id");
console.log(filmID);
