const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries);
    const countryhtml = countries.map(country => getCountryhtml(country));
    // console.log(countryhtml);
    const container = document.getElementById('countries');
    container.innerHTML = countryhtml.join(' ');

}

const getCountryhtml = country => {
    return `
        <div class ="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `;

}

loadCountries();

// const getCountrieshtml = country => {
//     return`
//     <h2>${country.name.common}</h2>
//     <h2>${country.flag.png}</h2>
//     `
// }