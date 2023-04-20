const restAPI = "http://cmsca.local/wp-json/wc/store/products";

const container = document.querySelector("section.container");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();

  products.forEach(function (products) {
    container.innerHTML += `
      <a class="card" href="/product.html?id=${products.id}">
          <div class="card-img">
            <img
              src="${products.images[0].src}"
              alt=""
            />
          </div>
          <p>${products.name}</p>
          <p>kr ${products.prices.price / 100}</p>
        </a>`;
  });
}

getProducts(restAPI);
