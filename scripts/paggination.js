console.log("paggination is okej");
currentPage = 1;
itemsPerPage = 20;
// previusButton.classList.add("disabled");
previusButton.addEventListener("click", function () {
  if (currentPage === 1) {
    console.log("you re on the first Page");
    // return;
  }
  currentPage--;

  if (currentPage === 1) {
    previusButton.classList.add("disabled");
  }
  const fetchUrl = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${itemsPerPage}`;

  axios
    .request(fetchUrl)
    .then((response) => {
      console.log(response);
      //   console.log(response, "response PREVIUS BUTTON");
      cointener.innerHTML = " ";
      pageNumber.innerText = currentPage;
      pageNumberPrevius.innerText = currentPage - 1;
      pageNumberNext.innerText = currentPage + 1;

      response.data.forEach((beer) => {
        appendDeatilsBeer(beer);
      });
    })
    .catch((error) => {
      console.error(error);
    });
  console.log("tesdt");
});

nextButton.addEventListener("click", function () {
  if (currentPage === 17) {
    nextButton.classList.add("disabled");
    return;
  }
  currentPage++;
  previusButton.classList.remove("disabled");

  const fetchUrl = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${itemsPerPage}`;

  axios
    .request(fetchUrl)
    .then((response) => {
      console.log(response.data);
      let beer = response.data;
      pageNumber.innerText = currentPage;
      pageNumber.classList.add("bold");
      pageNumberPrevius.innerText = currentPage - 1;
      pageNumberNext.innerText = currentPage + 1;
      cointener.innerHTML = " ";
      //   addtingToCointener(response.data);
      response.data.forEach((beer) => {
        appendDeatilsBeer(beer);
      });
    })
    .catch((error) => {
      console.error(error);
    });
});
