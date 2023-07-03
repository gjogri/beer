const searchInput = document.getElementById("search");

function search() {
  window.location.href = `./beers.html?name=${searchInput.value}`;
}
