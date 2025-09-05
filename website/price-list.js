document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("lang") || "de";
  loadPriceData(savedLang);

  // Обработчики кликов по иконкам языков
  document.querySelectorAll(".lang-icon").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      localStorage.setItem("lang", lang);
      loadPriceData(lang);
    });
  });

  function loadPriceData(lang) {
    fetch(`data/prices.${lang}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка загрузки файла prices.${lang}.json`);
        }
        return response.json();
      })
      .then((data) => {
        renderPriceList(data);
        setupFilters(data);
      })
      .catch((error) =>
        console.error(`Ошибка загрузки прайса [${lang}]:`, error)
      );
  }

  function renderPriceList(data, filter = "all", searchTerm = "") {
    const container = document.getElementById("priceListContainer");
    if (!container) return;

    container.innerHTML = "";
    if (!data.categories) return;

    data.categories.forEach((category) => {
      if (filter !== "all" && category.id !== filter) return;
      const categoryHTML = createCategoryHTML(category, searchTerm);
      container.insertAdjacentHTML("beforeend", categoryHTML);
    });

    initAccordion();
  }

  function createCategoryHTML(category, searchTerm) {
    return `
      <div class="price-category" data-category="${category.id}">
        <button class="price-category-btn">
          ${category.icon ? `<img class="price-category-img" src="${category.icon}" alt="${category.title}">` : ""}
          <span class="price-category-name">${category.title}</span>
          <span class="accordion-icon">+</span>
        </button>
        <div class="price-category-content">
          ${renderCategoryItems(category, searchTerm)}
        </div>  
      </div>
    `;
  }

  function renderCategoryItems(category, searchTerm = "") {
    if (!category.items) return "";
    const searchLower = searchTerm.toLowerCase();
    let html = "";

    const mainItems = category.items.filter(
      (item) =>
        !item.items &&
        (item.name?.toLowerCase().includes(searchLower) ||
         item.price?.toLowerCase().includes(searchLower))
    );

    if (mainItems.length > 0) {
      html += mainItems.map((item) => `
        <div class="price-category-content-item">
          <span class="price-category-content-item-name">${item.name}</span>
          <span class="price-category-content-item-price">${item.price}</span>
        </div>
      `).join("");
    }

    const subcategories = category.items.filter((item) => item.items);
    subcategories.forEach((subcategory) => {
      const filteredSubItems = (subcategory.items || []).filter((item) =>
        item.name?.toLowerCase().includes(searchLower) ||
        item.price?.toLowerCase().includes(searchLower)
      );
      if (filteredSubItems.length > 0) {
        html += createSubcategoryHTML(subcategory, filteredSubItems);
      }
    });

    return html;
  }

  function createSubcategoryHTML(subcategory, items) {
    return `
      <div class="price-subcategory" data-subcategory="${subcategory.id}">
        <button class="price-subcategory-btn">
          <span class="price-subcategory-name">${subcategory.title}</span>
          <span class="accordion-icon">+</span>
        </button>
        <div class="price-subcategory-content">
          ${items.map((item) => `
            <div class="price-category-content-item">
              <span class="price-category-content-item-name">${item.name}</span>
              <span class="price-category-content-item-price">${item.price}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  function setupFilters(data) {
    const categoryFilter = document.getElementById("categoryFilter");
    const searchInput = document.getElementById("searchInput");
    if (!categoryFilter || !searchInput) return;

    categoryFilter.innerHTML = '<option value="all">Alle Kategorien</option>';
    if (data.categories) {
      data.categories.forEach((category) => {
        const option = new Option(category.title, category.id);
        categoryFilter.add(option);
      });
    }

    searchInput.addEventListener("input", debounce((e) => {
      const filterValue = categoryFilter.value;
      renderPriceList(data, filterValue, e.target.value);
    }, 300));

    categoryFilter.addEventListener("change", (e) => {
      const searchTerm = searchInput.value || "";
      renderPriceList(data, e.target.value, searchTerm);
    });
  }

  function initAccordion() {
    const handleAccordionClick = (header, contentSelector) => {
      return (e) => {
        e.preventDefault();
        e.stopPropagation();
        header.classList.toggle("active");
        const content = header.parentElement.querySelector(contentSelector);
        if (content) {
          content.style.display = content.style.display === "block" ? "none" : "block";
        }
        const icon = header.querySelector(".accordion-icon");
        if (icon) {
          icon.textContent = icon.textContent === "+" ? "−" : "+";
        }
      };
    };

    document.querySelectorAll(".price-category-btn").forEach((header) => {
      header.addEventListener("click", handleAccordionClick(header, ".price-category-content"));
    });

    document.querySelectorAll(".price-subcategory-btn").forEach((header) => {
      header.addEventListener("click", handleAccordionClick(header, ".price-subcategory-content"));
    });
  }

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
});
