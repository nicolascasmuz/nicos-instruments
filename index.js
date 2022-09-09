function getData() {
  return fetch(
    "https://cdn.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=R0xhbEL0Ahlh81y60QK3Me6gqMvwB2tUMpl2J9pXI-U&&content_type=nicosStock"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      /* console.log("data: ", data); */
      const searchFormEl = document.querySelector(".header-input-button");

      searchFormEl.addEventListener("submit", (e) => {
        e.preventDefault();
        const search = e.target.buscar.value;

        const searchProduct = data["items"].filter((p) => {
          const filterResults = p.fields.title;
          const results = filterResults.includes(search);
          return results;
        });

        /* console.log("searchProduct: ", searchProduct); */
        for (let i = 0; i < searchProduct.length; i++) {
          const searchPic = data.includes.Asset.filter((p) => {
            const filterPic = p.sys.id;
            return filterPic;
          });

          const product = {
            title: searchProduct[i].fields.title,
            pic: searchPic[i].fields.file.url,
            price: searchProduct[i].fields.price,
          };
          getProducts(product);
          /* console.log("searchPic: ", searchPic); */
          /* console.log("product: ", product); */
        }
      });
    });
}

function getProducts(product = {}) {
  const templateEl = document.querySelector("#template-results");
  const cardWrapperEl = document.querySelector(".card-wrapper");

  templateEl.content.querySelector(".card-title").textContent = product.title;
  templateEl.content.querySelector(".card-img").src = product.pic;
  templateEl.content.querySelector(".card-price").textContent =
    "$" + product.price;

  if (cardWrapperEl.firstChild) {
    cardWrapperEl.children.remove();
  }

  const clone = document.importNode(templateEl.content, true);
  cardWrapperEl.appendChild(clone);

  const resultsEl = document.querySelector(".general-title");
  resultsEl.textContent = "Resultado: " + cardWrapperEl.length;
}

function main() {
  getData();
}

main();
