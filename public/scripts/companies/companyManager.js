let addCompanyBtn = document.getElementById('addCompany');

addCompanyBtn.addEventListener('click', () => {

    showWindow(htmlTextAddCompany, "closeAddCompanyBtn", "bgAddCompany");

    let ctn = document.getElementById("bgAddCompany");
    let floatingInputs = document.querySelectorAll('.form-floating input')
    let regionSelect = document.getElementById("regionSelectAdd");
    let countrySelect = document.getElementById("paisSelectAdd");
    let citySelect = document.getElementById("ciudadSelectAdd");
    let addressInput = document.getElementById("addressInputAdd");
    let form = document.getElementById('form');
    let cancelBtn = document.getElementById("cancelBtn");

    locationSelects(regionSelect, countrySelect, citySelect, addressInput);

    floatingInputs.forEach(input => {
        inputLabels(input)
    })

    cancelBtn.addEventListener("click", () => {
        body.classList.remove('modalActive')
        ctn.remove();
    });
    sendToBd(form, 'POST')
})