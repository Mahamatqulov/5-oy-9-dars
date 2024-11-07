const container = document.querySelector(".info-container");
const form = document.querySelector("form");

const countryName = document.getElementById("country-name");
const countryFlag = document.getElementById("country-flag");
const countryCapital = document.getElementById("country-capital");
const countrySymbol = document.getElementById("country-symbol");
const countryPopulation = document.getElementById("country-population");
//

//
const request = (countryNameInput) => {
  fetch(`https://restcountries.com/v3.1/name/${countryNameInput}`)
    .then((info) => info.json())
    .then((data) => {
      const country = data[0];
      countryName.textContent = country.name.common;
      countryFlag.src = country.flags.svg;
      countryPopulation.textContent = country.population;

      countryCapital.textContent = country.capital
        ? country.capital[0]
        : "No Capital";
    })
    .catch((error) => {
      console.error("Error fetching country data:", error);
      container.innerHTML = `<p>Country not found. Please try again.</p>`;
    });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = form.search.value.trim();
  if (searchInput) {
    request(searchInput);
  }
});
