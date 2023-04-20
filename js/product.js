const restAPI = "http://cmsca.local/wp-json/wc/store/products";

const featuredUrl =
  "http://cmsca.local/wp-json/wc/store/products?featured=true";

const container = document.querySelector("section.container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const detailUrl = restAPI + `/${id}`;

//product detail section

async function getDetail(url) {
  const response = await fetch(url);
  const detail = await response.json();

  const img = document.querySelector("div.img");
  img.innerHTML = `
  <img src="${detail.images[0].src}" alt="All-Weather Jacket product photo" />`;

  const title = document.querySelector("h1");
  title.innerHTML = detail.name;

  const price = document.querySelector(".product p");
  price.innerHTML = `kr ${detail.prices.price / 100}`;

  const info = document.querySelector(".product-info p");
  info.innerHTML = detail.description;
}
getDetail(detailUrl);

//featured section

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

getProducts(featuredUrl);
