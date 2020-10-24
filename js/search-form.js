const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector(".search-button");

searchForm.classList.toggle("search-form-hidden");

searchButton.addEventListener("click", function(evt) {

  searchForm.classList.toggle("search-form-hidden");
});
