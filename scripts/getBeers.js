let cointener = document.getElementById("cointener");
var beerDetails = document.getElementById("beerDetails");
const beerName = window.location.href.split("name=");
function appendBeer(beer) {
  const card = document.createElement("div");
  card.className = "card bg-light";
  const cardImg = document.createElement("img");
  const cardImgDiv = document.createElement("div");
  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";
  cardImgDiv.className = "d-flex justify-content-center";
  cardImg.className = "card-img-top img-card p-2";
  cardImg.src = beer.image_url;
  cardImgDiv.appendChild(cardImg);
  cardHeader.appendChild(cardImgDiv);
  card.appendChild(cardHeader);
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  const cardTitle = document.createElement("h4");
  cardTitle.className = "card-title";
  cardTitle.innerText = beer.name;
  cardBody.appendChild(cardTitle);
  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.innerText = beer.tagline;
  cardBody.appendChild(cardText);
  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";
  const cardButton = document.createElement("button");
  cardButton.className = "btn btn-sm btn-info";
  cardButton.innerText = "details";

  cardButton.addEventListener("click", (e) => {
    window.location.href = `./beerDetails.html?id=${beer.id}`;
  });
  cardFooter.appendChild(cardButton);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);
  cointener.appendChild(card);
  return card;
}
const allPerPages = document.querySelectorAll(".beers-per-page");

for (let beersPerPage of allPerPages) {
  beersPerPage.addEventListener("click", async (e) => {
    cointener.innerHTML = " ";
    e.preventDefault();
    itemsPerPage = Number(e.target.dataset.value);
    const fetchUrl = `https://api.punkapi.com/v2/beers?per_page=${itemsPerPage}`;
    const response = await axios.get(fetchUrl);

    response.data.forEach((beer) => {
      appendBeer(beer);
    });
  });
}

if (window.location.href.includes("name")) {
  let optionsWitName = {
    method: "GET",
    url: `https://api.punkapi.com/v2/beers?beer_name=${beerName[1]}`,
  };
  console.log(optionsWitName);
  axios.request(optionsWitName).then((singleBeer) => {
    cointener.innerHTML = " ";
    appendBeer(singleBeer.data[0]);
  });
}
