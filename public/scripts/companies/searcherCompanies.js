let inputSearchCompanies = document.getElementById('input_companias');
let btnSearchCompanies = document.getElementById('search_companias');

btnSearchCompanies.addEventListener("click", () => { searcherFunction(urlCompanies, inputSearchCompanies, companiesSection); });
inputSearchCompanies.addEventListener("keyup", (event) => {

    if (event.key == "Enter") {

        event.preventDefault();
        searcherFunction(urlCompanies, inputSearchCompanies, companiesSection);
    }
})