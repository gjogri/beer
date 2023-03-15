let beerDetails = document.getElementById("beerDetails");
const id = window.location.href.split("id=");
if (window.location.href.includes("id")) {
  let optionsWithId = {
    method: "GET",
    url: `https://api.punkapi.com/v2/beers/${id[1]}`,
  };
  console.log(optionsWithId);

  axios.request(optionsWithId).then((singleBeer) => {
    beerDeatils(singleBeer);
  });
} else {
  let options = {
    method: "GET",
    url: "https://api.punkapi.com/v2/beers/random",
  };
  // console.log(singleBeer);
  axios.request(options).then((singleBeer) => {
    beerDeatils(singleBeer);
  });
}
