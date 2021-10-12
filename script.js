const countries = document.getElementById('countries');
let fullInfoContainer = document.getElementById('full-info');

fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        data.forEach(country => {
            const countryName = country.name.common;
            const title = document.createElement('h3');
            title.innerText = countryName;
            title.style.cursor = 'pointer';
            countries.appendChild(title);
            title.addEventListener('click', () => getFullInfo(countryName));
        });
    });

function getFullInfo(title) {
    fetch(`https://restcountries.com/v3.1/name/${title}`)
        .then(res => res.json())
        .then(data => {
            const country = data[0];
            let infoDiv = document.createElement('div');
            const fullInfo = `
            <h4 class="my-2">${country.name.common}</h4>
            <img src="${country.flags.svg}" class="my-2" alt="bangladesh" width="100px" height="auto">
            <p class="p-0 m-0">Capital: ${country.capital[0]}</p >
            <p class="p-0 m-0">Population: ${country.population}</p>
            <p class="p-0 m-0">Area: ${country.area}</p>
            `;
            infoDiv.innerHTML = fullInfo;
            fullInfoContainer.appendChild(infoDiv);
        });
}
