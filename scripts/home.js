async function getDataFromApi() {
  try {
    const response = await axios.get("https://api.punkapi.com/v2/beers");
    localStorage.setItem("apiData", JSON.stringify(response.data));
    response.data.forEach((singleBeer) => appendBeer(singleBeer));
  } catch (error) {
    console.log(error);
  }
}

const apiData = JSON.parse(localStorage.getItem("apiData"));
if (apiData) {
  apiData.forEach((singleBeer) => appendBeer(singleBeer));
} else {
  getDataFromApi();
}
