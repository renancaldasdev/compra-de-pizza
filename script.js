let modalQt = 1;

// Listagem das pizzas
pizzaJson.map((item, index) => {
  let pizzaItem = document.querySelector(".models .pizza-item").cloneNode(true);

  // Preencher as informações em pizzaItem

  pizzaItem.setAttribute("data-key", index);
  pizzaItem.querySelector(".pizza-item--img img").src = item.img;
  pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$ ${item.price
    .toFixed(2)
    .replace(".", ",")}`;
  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;

  pizzaItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();

    let key = e.target.closest(".pizza-item").getAttribute("data-key");

    modalQt = 1;

    // Preencher modal

    document.querySelector(".pizzaBig img").src = pizzaJson[key].img;
    document.querySelector(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
    document.querySelector(".pizzaInfo--desc").innerHTML =
      pizzaJson[key].description;

    document.querySelector(
      ".pizzaInfo--actualPrice"
    ).innerHTML = `R$ ${pizzaJson[key].price.toFixed(2).replace(".", ",")}`;

    // Remove a classe selected ao fechar o modal
    document
      .querySelector(".pizzaInfo--size.selected")
      .classList.remove("selected");

    // Adiciona o tamanhos para cada pizza e seleciona o tamanho grande quando aberto o modal
    document.querySelectorAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
      if (sizeIndex == 2) {
        size.classList.add("selected");
      }
      size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
    });

    // Resetando a qt de pizza no modal

    document.querySelector(".pizzaInfo--qt").innerHTML = modalQt;

    // Fim preencher modal

    document.querySelector(".pizzaWindowArea").style.opacity = 0;
    document.querySelector(".pizzaWindowArea").style.display = "flex";
    setTimeout(() => {
      document.querySelector(".pizzaWindowArea").style.opacity = 1;
    }, 200);
  });

  document.querySelector(".pizza-area").append(pizzaItem);
});

// Eventos do MODAL
function closeModal() {
  document.querySelector(".pizzaWindowArea").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".pizzaWindowArea").style.display = "none";
  }, 500);
}

document
  .querySelectorAll(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton")
  .forEach((item) => {
    item.addEventListener("click", closeModal);
  });

document.querySelector(".pizzaInfo--qtmenos").addEventListener("click", () => {
  if (modalQt > 1) {
    modalQt--;
    document.querySelector(".pizzaInfo--qt").innerHTML = modalQt;
  }
});
document.querySelector(".pizzaInfo--qtmais").addEventListener("click", () => {
  modalQt++;
  document.querySelector(".pizzaInfo--qt").innerHTML = modalQt;
});

document.querySelectorAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
  size.addEventListener("click", (e) => {
    document
      .querySelector(".pizzaInfo--size.selected")
      .classList.remove("selected");
    size.classList.add("selected");
  });
});
