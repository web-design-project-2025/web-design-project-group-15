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
