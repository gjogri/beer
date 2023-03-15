let cointener = document.getElementById("cointener");
var beerDetails = document.getElementById("beerDetails");

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
