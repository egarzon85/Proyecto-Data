let regionSelect = document.getElementById('regionSelect');
let regionSelect2 = document.getElementById('regionSelect2');
let paisSelect = document.getElementById('paisSelect');
let addRBtn = document.getElementById('addRegionBtn');
let addCoBtn = document.getElementById('addCountryBtn');
let addCiBtn = document.getElementById('addCityBtn');

getOptionsOfDB(urlRegions, regionSelect, false);
locationSelects(regionSelect2, paisSelect, false, false);

addRBtn.addEventListener('click', e => {

    let regionName = e.target.previousElementSibling.value

    if (regionName == "") {
        console.log("El campo esta vacio");
        return
    }

    let formData = new FormData()
    formData.set('name', regionName)

    sendInfo(formData, urlRegions, addRBtn, "Región Creada")
})
addCoBtn.addEventListener('click', e => {
    let countryName = e.target.previousElementSibling.value
    let regionId = regionSelect.value

    if (countryName == "") {
        console.log("El campo esta vacio");
        return
    }
    let formData = new FormData()
    formData.set('name', countryName)
    formData.set('region_id', regionId)

    sendInfo(formData, urlCountries, addCoBtn, "País Creado")

})
addCiBtn.addEventListener('click', e => {
    let cityName = e.target.previousElementSibling.value
    let countryId = paisSelect.value

    if (cityName == "" || countryId == "") {
        console.log("El campo esta vacio");
        return
    }
    let formData = new FormData()
    formData.set('name', cityName)
    formData.set('country_id', countryId)

    sendInfo(formData, urlCities, addCiBtn, "Ciudad Creada")
})

function sendInfo(formData, url, btn, text) {
    let params = {
        method: 'POST',
        type: 'no-cors',
        body: formData
    };
    fetch(url, params)
        .then(res => res.json())
        .then(data => {
            btn.insertAdjacentHTML('afterend', `<p>¡${text}!</p>`);
            location.reload()
        })
        .catch(err => console.log(err))
}
