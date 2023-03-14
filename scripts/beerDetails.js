let beerDetails = document.getElementById("beerDetails");
let options = {
  method: "GET",
  url: "https://api.punkapi.com/v2/beers/random",
};

axios.request(options).then((singleBeer) => {
  beerDeatils(singleBeer);
});
