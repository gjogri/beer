console.log("test in search");
let searchInput = document.getElementById("search");

function search() {
  console.log(
    `https://api.punkapi.com/v2/beers?beer_name=${searchInput.value}`
  );
  window.location.href = `./beers.html?name=${searchInput.value}`;
  searchInput.value = "  ";
}
