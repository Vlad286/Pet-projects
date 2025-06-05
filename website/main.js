const btn = document.querySelector(".info_clothing-examples-container-btn");
const container = document.querySelector(".info_clothing-examples-container");
const zoomBlock = document.querySelector(
  ".info_clothing-examples-zoom-preview"
);

let allImages = [];
let showingFirstPart = true; 

function renderImages(images) {
  const oldImages = container.querySelectorAll(
    ".info_clothing-examples-container-img"
  );
  oldImages.forEach((img) => img.remove());

  images.forEach((item) => {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.classList.add("info_clothing-examples-container-img");

    img.addEventListener("mouseenter", () => {
      zoomBlock.style.backgroundImage = `url(${item.src})`;
    });

    container.insertBefore(img, btn);
  });
}

fetch("data/examples.json")
  .then((res) => res.json())
  .then((data) => {
    allImages = data.filter(item => item.src);

    const firstPart = allImages.slice(0, 11);
    renderImages(firstPart);
  })
  .catch((err) => console.error("Ошибка загрузки данных JSON:", err));

  btn.addEventListener("click", () => {
    if (showingFirstPart) {
      const secondPart = allImages.slice(11);
      btn.innerText = "Назад.";
      renderImages(secondPart);
    } else {
      const secondPart = allImages.slice(0, 11);
      btn.innerText = "Еще.";
      renderImages(secondPart);
    }
    showingFirstPart = !showingFirstPart;
  });

 
  
  
