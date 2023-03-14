function beerDeatils(singleBeer) {
  let beer = singleBeer.data[0];
  let perentDiv = document.createElement("div");
  let imgDiv = document.createElement("div");
  let card = document.createElement("div");
  card.classList.add("card");
  let beerImg = document.createElement("img");
  beerImg.src = beer.image_url;
  beerImg.classList.add("detail-img");
  imgDiv.append(beerImg);
  //cardHeader
  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";
  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = beer.name;
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText = beer.tagline;
  cardHeader.append(cardTitle, cardText);
  // Card Body
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  const description = document.createElement("p");
  description.classList.add("card-text");
  description.innerText = beer.description;
  cardBody.append(description);
  const alcohol = document.createElement("p");
  alcohol.classList.add("card-text");
  alcohol.innerText = "Alcohol:" + " " + beer.abv + " " + " %";
  cardBody.append(alcohol);
  const brewed = document.createElement("p");
  brewed.classList.add("card-text");
  brewed.innerText = "Brewed:" + " " + beer.first_brewed;
  cardBody.append(brewed);
  const bitterness = document.createElement("p");
  bitterness.classList.add("card-text");
  bitterness.innerText = "Bitterness:" + " " + beer.ibu + " " + " IBU";

  cardBody.append(bitterness);
  // Card Footer
  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";
  const footerTitle = document.createElement("h4");
  footerTitle.classList.add("card-text");
  footerTitle.innerText = "Food pairing";
  footerTitle.classList.add("card-text");
  cardFooter.append(footerTitle);
  beer.food_pairing.forEach((e) => {
    let pariringList = document.createElement("p");
    pariringList.classList.add("card-text");
    pariringList.innerText = " '' " + e + "''";
    cardFooter.append(pariringList);
  });
  const cardButton = document.createElement("button");
  cardButton.className = "btn btn-sm btn-primary backButtonStyle";
  cardButton.innerText = "BACK";
  cardButton.addEventListener("click", (e) => {
    console.log(window.location.href);
    if (window.location.href.includes("home.html")) {
      window.location.href = "http://127.0.0.1:5501/home.html";
      return;
    }
    if (window.location.href.includes("beers.html")) {
      window.location.href = "http://127.0.0.1:5501/beers.html";
      return;
    }
    if (window.location.href.includes("beerDetails.html")) {
      window.location.href = "http://127.0.0.1:5501/home.html";
      return;
    }
  });

  card.append(cardHeader, cardBody, cardFooter);
  perentDiv.append(imgDiv, card);
  perentDiv.classList.add("roww");

  beerDetails.appendChild(cardButton);
  beerDetails.appendChild(perentDiv);
}
