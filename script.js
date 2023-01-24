pizzaJson.map((item, index) => {
  let pizzaItem = document.querySelector(".models .pizza-item").cloneNode(true);

  // Preencher as informações em pizzaItem

  pizzaItem.querySelector(".pizza-item--img img").src = item.img;
  pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$ ${item.price
    .toFixed(2)
    .replace(".", ",")}`;
  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;

  pizzaItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector(".pizzaWindowArea").style.opacity = 0;
    document.querySelector(".pizzaWindowArea").style.display = "flex";
    setTimeout(() => {
      document.querySelector(".pizzaWindowArea").style.opacity = 1;
    }, 200);
  });

  document.querySelector(".pizza-area").append(pizzaItem);
});
