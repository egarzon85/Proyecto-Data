let regionsSection = document.getElementById('regionsSection');


function getRegions() {

    fetch(urlRegions)
        .then(res => res.json())
        .then(info => {

            createRegionsCards(info)
        })
}
getRegions()




function createRegionsCards(infoReg) {
    let it = 0
    infoReg.forEach(reg => {
        fetch(`${urlCountries}/byRegionId/${reg.id}`)
            .then(res => res.json())
            .then(info => {
                it++

                let liRegion;
                if (info.length == 0) {
                    liRegion = `<li class="regions_card" id="region${reg.id}">
                        <span>${reg.name}</span>
                        <button class="btn_seeinfo">Ver Info</button>
                        <div class="acciones">
                            <i class="dots">•••</i>
                            <i class="fas fa-trash trash"></i>
                            <i class="fas fa-edit edit"></i>
                        </div>
                    </li>`
                    regionsSection.insertAdjacentHTML('beforeend', liRegion);


                } else {
                    liRegion = `<li class="regions_card" id="region${reg.id}">
                        <span class="caret">${reg.name}</span>
                        <button class="btn_seeinfo">Ver Info</button>
                        <ul class="nested">
                        </ul>
                        <div class="acciones">
                            <i class="dots">•••</i>
                            <i class="fas fa-trash trash"></i>
                            <i class="fas fa-edit edit"></i>
                        </div>
                    </li>`
                    regionsSection.insertAdjacentHTML('beforeend', liRegion);
                    reg.allCountries = info
                    let ulCountry = document.querySelector(`#region${reg.id} >ul`)
                    info.forEach(con => {

                        fetch(`${urlCities}/byCountryId/${con.id}`)
                            .then(res => res.json())
                            .then(data => {

                                let liCountry;
                                if (data.length == 0) {
                                    liCountry = `<li id="country${con.id}">
                                        <span>${con.name}</span>
                                        <div class="accionesFixed">
                                            <i class="fas fa-trash trash"></i>
                                            <i class="fas fa-edit edit"></i>
                                        </div>
                                    </li>`
                                    ulCountry.insertAdjacentHTML('beforeend', liCountry);

                                } else {
                                    liCountry = `<li id="country${con.id}">
                                        <span class="caret">${con.name}</span>
                                        <div class="accionesFixed">
                                            <i class="fas fa-trash trash"></i>
                                            <i class="fas fa-edit edit"></i>
                                        </div>
                                        <ul class="nested">
                                        </ul>
                                    </li>`
                                    ulCountry.insertAdjacentHTML('beforeend', liCountry);
                                    let ulCity = document.querySelector(`#country${con.id} >ul`)
                                    con.allCities = data

                                    data.forEach(cit => {
                                        let liCity = `<li id="city${cit.id}"><span>${cit.name}</span>
                                            <div class="accionesFixed">
                                                <i class="fas fa-trash trash"></i>
                                                <i class="fas fa-edit edit"></i>
                                            </div>
                                        </li>`

                                        ulCity.insertAdjacentHTML('beforeend', liCity);

                                    })

                                }
                            })
                    })
                }
            }).then(() => {
                if (it == infoReg.length) {
                    let btnsSeeMore = document.querySelectorAll('.btn_seeinfo')
                    btnsSeeMore.forEach(btn => {
                        btn.addEventListener('click', (e) => {

                            let id = e.target.parentNode.id
                            id = id.replace("region", "");

                            fetch(`${urlRegions}/${id}`)
                                .then(res => res.json())
                                .then(info => {
                                    showLocationInfo(info[0])

                                })
                        })
                    })
                    let actionsBtn = document.querySelectorAll(".acciones");
                    actionsBtn.forEach(ac => {
                        ac.addEventListener('mouseover', (e) => {
                            ac.classList.add('active')
                            ac.addEventListener('mouseout', (e) => {
                                ac.classList.remove('active')
                            })
                        })
                    })

                    setTimeout(() => {
                        treeView()
                        let trashBtn = document.querySelectorAll('.trash');
                        let editBtn = document.querySelectorAll('.edit');
                        trashBtn.forEach(el => {
                            el.addEventListener('click', () => {
                                let parentId = el.parentNode.parentNode.id

                                if (parentId.charAt(0) == 'r') {
                                    let id = parentId.replace("region", "");
                                    showDeleteModal(id, urlRegions)

                                } else if (parentId.charAt(1) == 'o') {
                                    let id = parentId.replace("country", "");
                                    showDeleteModal(id, urlCountries)

                                } else if (parentId.charAt(1) == 'i') {
                                    let id = parentId.replace("city", "");
                                    showDeleteModal(id, urlCities)

                                }
                            })
                        })
                        editBtn.forEach(el => {
                            el.addEventListener('click', () => {
                                let parentId = el.parentNode.parentNode.id

                                if (parentId.charAt(0) == 'r') {
                                    let id = parentId.replace("region", "");
                                    let info = infoReg.find(reg => reg.id == id);
                                    editLocationModal(info, urlRegions, 'r')

                                } else if (parentId.charAt(1) == 'o') {
                                    let id = parentId.replace("country", "");
                                    infoReg.forEach(r => {
                                        if (r.allCountries) {
                                            let info = r.allCountries.find(con => con.id == id);
                                            if (info) { editLocationModal(info, urlCountries, 'co') }
                                        }
                                    })

                                } else if (parentId.charAt(1) == 'i') {
                                    let id = parentId.replace("city", "");
                                    infoReg.forEach(r => {
                                        if(r.allCountries){
                                            r.allCountries.forEach(c => {
                                                if (c.allCities) {
                                                    let info = c.allCities.find(cit => cit.id == id);
                                                    if (info) { editLocationModal(info, urlCities, 'ci') }
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        })
                    }, 1000);


                }
            })
    })
}
function showLocationInfo(info) {

    let htmlLocationInfo =
        `<div class='bgInfoLocation' id='bgInfoLocation'>
            <div class='box_location'>
                <div class='close_btn' id='closeInfoLocation'>
                    <img src='assets/button-close.svg' alt='close Button'>
                </div>
                <h2>${info.name}</h2>
                <div class="contacts">
                    <div>
                        <i class="fas fa-users"></i>
                        <p>Contactos</p>
                    </div>
                    <ul class="contactsUl" id="contactsLocationUl"></ul>
                </div>
                <div class="companies">
                    <div>
                        <i class="fas fa-building"></i>
                        <p>Compañías</p>
                    </div>
                    <ul class="companiesUl" id="companiesLocationUl"></ul>
                </div>
            </div>
        </div>`

    showWindow(htmlLocationInfo, 'closeInfoLocation', 'bgInfoLocation');
    let contactsSection = document.getElementById('contactsLocationUl');
    let companiesSection = document.getElementById('companiesLocationUl');
    createContactsList(contactsSection, info.allContacts, "location")
    createCompaniesList(companiesSection, info.allCompanies)
}

function createCompaniesList(ctn, allCompaniesInfo) {

    if (allCompaniesInfo.length == 0) {
        ctn.classList.add('noCompanies')
        ctn.innerHTML = `<span>No hay compañías para mostrar</span>`
    } else {

        ctn.classList.remove('noCompanies');
        ctn.innerHTML = ``
        allCompaniesInfo.forEach(company => {
            let country = company.country.substring(0, 3)
            let companyHtml = `
            <li id="company${company.id}" class = "companyLi">

                <p class="comName">${company.name}</p>
                <p class="comEmail"><i class="fas fa-envelope"></i>${company.email}</p>
                <p class="comPhone"><i class="fas fa-phone-square-alt"></i>${company.phone}</p>
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>${company.city}, ${country}</p>
                    <p class="address">${company.address}</p>
                </div>
               
            </li>
            `
            ctn.insertAdjacentHTML('beforeend', companyHtml);

        })
    }

}

function showDeleteModal(id, url) {

    showWindow(deleteRegWindowHTML, 'closeDelContactBtn', 'bgdeleteContact')

    let delConfirmBtn = document.getElementById('delConfirmBtn')

    delConfirmBtn.addEventListener('click', () => {
        let container = document.getElementById("bgdeleteContact")
        container.remove()
        body.classList.remove('modalActive')
        deleteRegion(id, url)
    })


}
function deleteRegion(id, url) {

    let parametros = {

        method: 'DELETE',
        //body: form,
        type: 'no-cors'
    }
    let newUrl = `${url}/${id}`
    fetch(newUrl, parametros)
        .then(res => res.json())
        .then(data => {
            location.reload()
        })

}

function createLocationCards(info) {
    section.classList.add('searchActive')
    info.forEach(location => {
        let cardHTML = `<div id= "${location.type}${location.id}" class="searchResults">
            <p>${location.name} <span>(${location.type})</span></p>
            <button>Ver Info</button>
        </div>`

        section.insertAdjacentHTML('beforeend', cardHTML);

    })
    let cards = document.querySelectorAll('.searchResults')
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.id.charAt(0) == 'r') {

                let id = card.id.replace("region", "");
                getLocation(urlRegions, id)

            } else if (card.id.charAt(1) == 'o') {

                let id = card.id.replace("country", "");
                getLocation(urlCountries, id)

            } else if (card.id.charAt(1) == 'i') {

                let id = card.id.replace("city", "");
                getLocation(urlCities, id)

            }
        })
    })

}

function getLocation(url, id) {

    url = `${url}/${id}`

    fetch(url)
        .then(res => res.json())
        .then(info => showLocationInfo(info[0]))
}
function editLocationModal(info, url, type) {
    showWindow(htmlTextEditLocation(info, type), "closeEditLocationBtn", "bgEditLocation");

    if(type == "co"){
        let regionSelectAdd = document.getElementById('regionSelectAdd');
        locationSelects(regionSelectAdd);
    } else if(type == "ci"){
        let regionSelectAdd = document.getElementById('regionSelectAdd');
        let countrySelectAdd = document.getElementById('countrySelectAdd');
        locationSelects(regionSelectAdd, countrySelectAdd);
    }

    let form = document.getElementById('form');
    let cancelBtn = document.getElementById("cancelBtn");
    cancelBtn.addEventListener("click", () => {
        let ctn = document.getElementById("bgEditLocation");
        body.classList.remove('modalActive')
        ctn.remove();
    });

    sendToBd(form, url, info.id)
}
function sendToBd(form, url, id) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        let params = {
            method: 'PUT',
            type: 'no-cors',
            body: formData
        };
        for (var pair of formData.entries()) {
            if (pair[1] == "") {
                console.log("falta rellenar el campo de " + pair[0])
                return
            }
        }
        fetch(`${url}/${id}`, params)
            .then(res => res.json())
            .then(data => {
                location.reload()
            })
            .catch(err => console.log(err))
    })
}