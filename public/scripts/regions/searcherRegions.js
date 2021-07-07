let inputSearchRegion = document.getElementById('input_regiones');
let btnSearchRegion = document.getElementById('search_regiones');
let section = document.querySelector('.bodyRegionsSection')

btnSearchRegion.addEventListener("click", () => {
    searcherFunction(urlAllLocation, inputSearchRegion, section);
});
inputSearchRegion.addEventListener("keyup", (event) => {

    if (event.key == "Enter") {

        event.preventDefault();
        searcherFunction(urlAllLocation, inputSearchRegion, section);

    }
})