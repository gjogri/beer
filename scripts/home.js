console.log("connected");
console.log("test");

function getDataFromApi() {
  axios
    .get("https://api.punkapi.com/v2/beers")
    .then((response) => {
      localStorage.setItem("apiData", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}

const apiData = JSON.parse(localStorage.getItem("apiData"));
console.log(apiData);
if (apiData) {
} else {
  getDataFromApi();
}
