let companiesSection = document.getElementById('companiesSection');


function getCompanies() {
    fetch(urlCompanies)
        .then(res => res.json())
        .then(info => {

            createCompanies(info)
        })
}
getCompanies()

function createCompanies(info) {
    createCompanyCards(info)

    let seeMoreInfoBtn = document.querySelectorAll('#seeMoreBtn')
    seeMoreInfoBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {

            let id = e.target.parentNode.id
            id = id.replace("company", "")
            let companySelected = info.find(comp => comp.id == id);
            showCompanyInfo(companySelected)
        })
    })
}

function createCompanyCards(info) {
    info.forEach(comp => {
        let i = 0
        let newCompanyHtml = `<article class="company_card" id="company${comp.id}">
            <h2>${comp.name}</h2>
            <div class="seemore_card" id="seeMoreBtn">
                Ver Info
            </div>
            <div class="info_company">
                <span>Ubicación</span>
                <p>${comp.country}, ${comp.region}</p>
                <p>${comp.address}, ${comp.city}</p>

            </div>
            <div class="users_company">
                <p>Todos los contactos</p>
                <div id="contactsImages"></div>
            </div>
        </article>`

        companiesSection.insertAdjacentHTML('beforeend', newCompanyHtml)

        comp.allContacts.forEach(contact => {

            if (i > 7) {
                return
            }
            //let img = ` <img src=${contact.img_url}alt="contactImg">`
            let img = ` <img src="assets/avatar.png" alt="contactImg">`

            let imgContainer = document.querySelector(`#company${comp.id} #contactsImages`);
            imgContainer.insertAdjacentHTML('beforeend', img)

            i++
        })
    })
}

function showCompanyInfo(companyInfo) {

    let htmlCompanyInfo =
        `<div class='bgInfoCompany' id='bgInfoCompany'>
        <div class='box_company' id="company${companyInfo.id}">
            <div class='close_btn' id='closeInfoCompany'>
                <img src='assets/button-close.svg' alt='close Button'>
            </div>
            <div class="acciones">
                <i class="dots">•••</i>
                <i class="fas fa-trash trash"></i>
                <i class="fas fa-edit edit"></i>
            </div>
            <h2>${companyInfo.name}</h2>
            <div class="location">
                <i class="fas fa-map-marker-alt"></i>
                <p>${companyInfo.address}, ${companyInfo.city}, ${companyInfo.country}, ${companyInfo.region}</p>
            </div>
            <div class="contacts">
                <div>
                    <i class="fas fa-users"></i>
                    <p>Contactos</p>
                </div>
                <ul class="contactsUl" id="contactsCompanyUl">
                    
                </ul>
            </div>
        </div>
    </div>`

    showWindow(htmlCompanyInfo, 'closeInfoCompany', 'bgInfoCompany');
    let contactsSection = document.getElementById('contactsCompanyUl')
    createContactsList(contactsSection, companyInfo.allContacts, "company")

    let actionsBtn = document.querySelector(".acciones");
    let trashBtn = document.querySelector('.acciones .trash')
    let editBtn = document.querySelector('.acciones .edit')
    actionsBtn.addEventListener('mouseover', (e) => {
        actionsBtn.classList.add('active');
    })
    actionsBtn.addEventListener('mouseout', (e) => {
        actionsBtn.classList.remove('active');
    })
    trashBtn.addEventListener('click', () => {
        let parent = trashBtn.parentNode.parentNode
        showDeleteModal(parent)
    })
    editBtn.addEventListener('click', () => {
        editCompanyModal(companyInfo)
    })



}

function showDeleteModal(parent) {

    showWindow(deleteCompWindowHTML, 'closeDelContactBtn', 'bgdeleteContact')

    let delConfirmBtn = document.getElementById('delConfirmBtn');

    delConfirmBtn.addEventListener('click', () => {
        let container = document.getElementById("bgdeleteContact")
        container.remove()
        body.classList.remove('modalActive')
        deleteContact(parent)
    })
}

function editCompanyModal(info) {

    let bgInfoCompany = document.getElementById('bgInfoCompany');
    bgInfoCompany.remove()

    showWindow(htmlTextEditCompany(info), "closeAddCompanyBtn", "bgAddCompany");

    let regionSelect = document.getElementById("regionSelectAdd");
    let countrySelect = document.getElementById("paisSelectAdd");
    let citySelect = document.getElementById("ciudadSelectAdd");
    let addressInput = document.getElementById("addressInputAdd");
    let form = document.getElementById('form');

    locationSelects(regionSelect, countrySelect, citySelect, addressInput);
    sendToBd(form, 'PUT', info.id)


}

function deleteContact(parent) {
    let id = parent.id
    id = id.replace("company", "")

    let url = `${urlCompanies}/${id}`
    let parametros = {

        method: 'DELETE',
        type: 'no-cors'
    }

    fetch(url, parametros)
        .then(res => res.json())
        .then(data => {
            location.reload();
        })
}

function sendToBd(form, method, id) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let newUrlCompanies = urlCompanies
        let formData = new FormData(e.currentTarget)
        let params = {
            method: `${method}`,
            type: 'no-cors',
            body: formData
        };
        if (method == 'PUT') {
            newUrlCompanies = `${urlCompanies}/${id}`
        }
        if (formData.has('name') && formData.has('email') && formData.has('phone') && formData.has('city_id') && formData.has('address')) {
            fetch(newUrlCompanies, params)
                .then(res => res.json())
                .catch(err => console.log(err))
                .then(data => {
                    location.reload()
                })
        } else {
            console.log('falta informacion')
        }
    })
}