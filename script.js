const bookingUrl = "https://booksy.com/pl-pl/330339_ae-nails-lashes-siedlce_paznokcie_4669_siedlce";

const portfolioItems = [
  { src: "./assets/nails-review-04.jpeg", type: "Paznokcie", title: "Różowy french" },
  { src: "./assets/nails-review-03.jpeg", type: "Paznokcie", title: "Brokatowy french" },
  { src: "./assets/nails-review-01.jpeg", type: "Paznokcie", title: "Klasyczny french" },
  { src: "./assets/nails-review-05.jpeg", type: "Paznokcie", title: "Naturalne wykończenie" },
  { src: "./assets/nails-review-08.jpeg", type: "Paznokcie", title: "Kolorowe przedłużenie" },
  { src: "./assets/lashes-4d.jpeg", type: "Rzęsy", title: "Uzupełnienie rzęs 4D-5D" },
  { src: "./assets/tattoo-04.jpeg", type: "Tattoo", title: "Minimalistyczny detal" }
];

const serviceCategories = [
  {
    name: "Popularne",
    services: [
      { name: "Uzupełnianie paznokci żelem/akrylem", oldPrice: "110 zł", price: "99 zł", duration: "1 godz.", note: "Promocja do 10%" },
      { name: "Pedicure + lakier hybrydowy", oldPrice: "90 zł", price: "81 zł", duration: "1 godz.", note: "Promocja do 10%" },
      { name: "Manicure hybrydowy + baza wzmacniająca", price: "90 zł", duration: "45 min", note: "Dodatki dostępne w Booksy" }
    ]
  },
  {
    name: "Inne usługi",
    services: [
      { name: "Uzupełnienie rzęs 4D-5D", oldPrice: "130 zł", price: "117 zł", duration: "1 godz. 15 min", note: "Promocja do 10%" }
    ]
  },
  {
    name: "Manicure",
    services: [
      { name: "Naprawa paznokcia hybrydowy", price: "10 zł", duration: "10 min" },
      { name: "Naprawa paznokcia żel/akryl", price: "15 zł", duration: "10 min" },
      { name: "Usuwanie hybrydy z paznokci", price: "30 zł", duration: "20 min" },
      { name: "Manicure męski", price: "40 zł", duration: "30 min" },
      { name: "Usuwanie żelu/akrylu z paznokcia z innego salonu", price: "40 zł", duration: "20 min" },
      { name: "Manicure bez malowania", price: "40 zł", duration: "30 min" },
      { name: "Usuwanie hybrydy z paznokci z innego salonu", price: "40 zł", duration: "20 min" },
      { name: "Usuwanie żelu/akrylu z paznokci", price: "40 zł", duration: "20 min" },
      { name: "Manicure hybrydowy + baza wzmacniająca", price: "90 zł", duration: "45 min", note: "Dodatki dostępne w Booksy" },
      { name: "Przedłużanie paznokci żelem/akrylem tipsy", oldPrice: "110 zł", price: "99 zł", duration: "1 godz. 15 min", note: "Promocja do 10%" },
      { name: "Utwardzanie paznokcia żelem/akrylem", oldPrice: "110 zł", price: "99 zł", duration: "1 godz.", note: "Promocja do 10%" },
      { name: "Uzupełnianie paznokci żelem/akrylem", oldPrice: "110 zł", price: "99 zł", duration: "1 godz.", note: "Promocja do 10%" },
      { name: "Przedłużenie żelem/akrylem na szablonie 10 paznokci", oldPrice: "140 zł", price: "126 zł", duration: "1 godz. 15 min", note: "Promocja do 10%" }
    ]
  },
  {
    name: "Pedicure",
    services: [
      { name: "Pedicure bez malowania", price: "70 zł", duration: "30 min", note: "Dodatki dostępne w Booksy" },
      { name: "Pedicure bez wody", price: "70 zł", duration: "45 min", note: "Dodatki dostępne w Booksy" },
      { name: "Pedicure + lakier hybrydowy", oldPrice: "90 zł", price: "81 zł", duration: "1 godz.", note: "Promocja do 10%" },
      { name: "Pedicure + lakier klasyczny", oldPrice: "90 zł", price: "81 zł", duration: "45 min", note: "Promocja do 10%" }
    ]
  },
  {
    name: "Uzupełnienie rzęs",
    services: [
      { name: "Henna brwi i rzęsy", price: "40 zł", duration: "20 min" },
      { name: "Regulacja + henna brwi", price: "40 zł", duration: "15 min" },
      { name: "Uzupełnienie rzęs 1D/2D", oldPrice: "120 zł", price: "108 zł", duration: "1 godz. 5 min", note: "Promocja do 10%" },
      { name: "Laminacja rzęs", oldPrice: "120 zł", price: "108 zł", duration: "1 godz. 10 min", note: "Promocja do 10%" },
      { name: "Uzupełnienie rzęs 3D/4D", oldPrice: "140 zł", price: "126 zł", duration: "1 godz. 15 min", note: "Promocja do 10%" },
      { name: "Uzupełnienie rzęs 5D/7D", oldPrice: "140 zł", price: "126 zł", duration: "1 godz. 15 min", note: "Promocja do 10%" },
      { name: "Laminacja rzęs + farbowanie + botox", oldPrice: "140 zł", price: "126 zł", duration: "1 godz. 5 min", note: "Promocja do 10%" },
      { name: "Uzupełnienie rzęs mokry efekt", oldPrice: "150 zł", price: "135 zł", duration: "1 godz. 15 min", note: "Promocja do 10%" },
      { name: "Uzupełnienie rzęs 8D/12D", oldPrice: "150 zł", price: "135 zł", duration: "1 godz. 20 min", note: "Promocja do 10%" },
      { name: "Uzupełnienie rzęs K-kim efekt", oldPrice: "160 zł", price: "144 zł", duration: "1 godz. 20 min", note: "Promocja do 10%" }
    ]
  },
  {
    name: "Nowe rzęsy",
    services: [
      { name: "Przedłużanie rzęs 3D/4D Light volume", oldPrice: "160 zł", price: "144 zł", duration: "1 godz. 30 min", note: "Promocja do 10%" },
      { name: "Przedłużanie rzęs 1D/2D natural", oldPrice: "140 zł", price: "126 zł", duration: "1 godz. 15 min", note: "Promocja do 10%" },
      { name: "Przedłużanie rzęs 5D/7D volume", oldPrice: "170 zł", price: "153 zł", duration: "1 godz. 20 min", note: "Promocja do 10%" },
      { name: "Przedłużanie rzęs 8D/12D", oldPrice: "180 zł", price: "162 zł", duration: "1 godz. 30 min", note: "Promocja do 10%" },
      { name: "Przedłużanie rzęs K-kim efekt", oldPrice: "160 zł", price: "144 zł", duration: "1 godz. 30 min", note: "Promocja do 10%" },
      { name: "Henna rzęs", price: "25 zł", duration: "10 min" },
      { name: "Przedłużanie rzęs mokry efekt", oldPrice: "170 zł", price: "153 zł", duration: "1 godz. 20 min", note: "Promocja do 10%" }
    ]
  },
  {
    name: "Henna brwi",
    services: [
      { name: "Laminacja brwi - kolor", oldPrice: "120 zł", price: "108 zł", duration: "1 godz.", note: "Promocja do 10%" },
      { name: "Laminacja brwi", oldPrice: "100 zł", price: "90 zł", duration: "50 min", note: "Promocja do 10%" },
      { name: "Regulacja brwi", price: "20 zł", duration: "10 min" },
      { name: "Henna brwi", price: "25 zł", duration: "10 min" }
    ]
  },
  {
    name: "Art Soul Tattoo",
    services: [
      {
        name: "Tattoo",
        price: "199 zł+",
        duration: "2 godz.",
        note: "Tatuażyści z 10-letnim doświadczeniem. Narzędzia spełniają europejskie standardy."
      }
    ]
  }
];

let activeCategory = "Wszystkie";

const portfolioGrid = document.querySelector("#portfolioGrid");
const categoryTabs = document.querySelector("#categoryTabs");
const priceList = document.querySelector("#priceList");
const serviceSearch = document.querySelector("#serviceSearch");
const serviceCount = document.querySelector("#serviceCount");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const closeLightbox = document.querySelector("#closeLightbox");

function renderPortfolio() {
  portfolioGrid.innerHTML = portfolioItems
    .map(
      (item) => `
        <button class="gallery-card" type="button" data-src="${item.src}" data-title="${item.title}" data-type="${item.type}">
          <img src="${item.src}" alt="${item.title}" loading="lazy" />
          <div><span>${item.type}</span><strong>${item.title}</strong></div>
        </button>
      `
    )
    .join("");

  portfolioGrid.querySelectorAll(".gallery-card").forEach((button) => {
    button.addEventListener("click", () => {
      lightboxImage.src = button.dataset.src;
      lightboxImage.alt = button.dataset.title;
      lightboxCaption.textContent = `${button.dataset.type} • ${button.dataset.title}`;
      lightbox.showModal();
    });
  });
}

function renderTabs() {
  const categories = ["Wszystkie", ...serviceCategories.map((category) => category.name)];
  categoryTabs.innerHTML = categories
    .map((category) => `<button type="button" class="${category === activeCategory ? "active" : ""}" data-category="${category}">${category}</button>`)
    .join("");

  categoryTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderTabs();
      renderPrices();
    });
  });
}

function serviceMatches(service, query) {
  return `${service.name} ${service.note || ""}`.toLowerCase().includes(query);
}

function renderPrices() {
  const query = serviceSearch.value.trim().toLowerCase();
  const visibleCategories = serviceCategories
    .filter((category) => activeCategory === "Wszystkie" || category.name === activeCategory)
    .map((category) => ({
      ...category,
      services: category.services.filter((service) => serviceMatches(service, query))
    }))
    .filter((category) => category.services.length > 0);

  const count = visibleCategories.reduce((sum, category) => sum + category.services.length, 0);
  serviceCount.textContent = `${count} ${count === 1 ? "usługa" : count < 5 ? "usługi" : "usług"}`;

  priceList.innerHTML = visibleCategories.length
    ? visibleCategories
        .map(
          (category) => `
            <section class="price-category">
              <h3>${category.name}<span>${category.services.length} usług</span></h3>
              ${category.services
                .map(
                  (service) => `
                    <article class="service-row">
                      <div>
                        <h4>${service.name}</h4>
                        <p>${service.note || "Cena i czas według publicznego cennika Booksy."}</p>
                      </div>
                      <a class="service-price" href="${bookingUrl}" target="_blank" rel="noreferrer" aria-label="Umów ${service.name}">
                        ${service.oldPrice ? `<del>${service.oldPrice}</del>` : ""}
                        <strong>${service.price}</strong>
                        <small>${service.duration}</small>
                      </a>
                    </article>
                  `
                )
                .join("")}
            </section>
          `
        )
        .join("")
    : `<div class="price-category"><h3>Brak wyników<span>0 usług</span></h3><article class="service-row"><div><h4>Spróbuj innej frazy</h4><p>Na przykład: rzęsy, laminacja, pedicure, tattoo.</p></div></article></div>`;
}

serviceSearch.addEventListener("input", renderPrices);
closeLightbox.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

renderPortfolio();
renderTabs();
renderPrices();
