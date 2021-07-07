//varibles globales

let body = document.querySelector("body");
let urlUsers = "http://localhost:3000/users";
let urlRegions = "http://localhost:3000/regions";
let urlCountries = "http://localhost:3000/countries";
let urlCities = "http://localhost:3000/cities";
let urlAllLocation = "http://localhost:3000/all_info_location";
let urlCompanies = "http://localhost:3000/companies";
let urlContacts = "http://localhost:3000/contacts";
let urlChannels = "http://localhost:3000/channels";
let token = localStorage.getItem('token');
let userLogued = document.getElementById('userLogued');
let logOutBtn = document.getElementById('logOutBtn')

function selectUser(token) {

  if (!token) {
    location.href = "http://127.0.0.1:5500/public/login.html";
    return
  }

  fetch(`${urlUsers}/${token}`)
    .then(res => res.json())
    .then(data => {
      let rol;
      if (data[0].is_admin == 1) {
        body.classList.add("adminMode")
        rol = "Administrador"
      } else {
        body.classList.add("basicMode")
        rol = "Basico"
      }
      userLogued.innerHTML = `
      <img src="assets/avatar.png" alt="user picture">
      <p>${data[0].name} ${data[0].lastname}</p>
      <div>
        <p class="email">${data[0].email}</p>
        <p class="rol">Rol: ${rol}</p>
      </div>
      `
      userLogued.addEventListener('click', () => {
        userLogued.classList.toggle('active')
      })
    })
}
selectUser(token)

logOutBtn.addEventListener('click', () => {
  localStorage.removeItem('token')
  location.href = "http://127.0.0.1:5500/public/login.html";
})

//funcion selects dependientes

let countrieEventCreated = false;

function locationSelects(
  regionSelect,
  countrySelect,
  citySelect,
  addressInput
) {
  let region = getOptionsOfDB(urlRegions, regionSelect, false);
  region.then((regionsInfo) => {
    regionSelect.addEventListener("change", (e) => {
      if (!countrySelect) {
        //solo rellena el campo de region
        return
      }
      if (countrySelect.childNodes) {
        countrySelect.innerHTML = `<option>Seleccione una Región</option>`;
      }
      if (citySelect) {
        if (citySelect.childNodes) {
          citySelect.setAttribute("disabled", "");
          addressInput.setAttribute("disabled", "");
          citySelect.innerHTML = `<option>Seleccione una ciudad</option>`;
        }
      }

      let regionSelected = regionsInfo.find(
        (reg) => reg.name == regionSelect.options[regionSelect.selectedIndex].textContent
      );
      let country = getOptionsOfDB(urlCountries, countrySelect, regionSelected);
      countrySelect.removeAttribute("disabled");

      country.then((countriesInfo) => {
        if (!countrieEventCreated && citySelect) {
          countrySelect.addEventListener("change", (e) => {
            countrieEventCreated = true;

            if (citySelect.childNodes) {
              addressInput.setAttribute("disabled", "");
              citySelect.innerHTML = `<option>Seleccione una ciudad</option>`;
            }

            let countrySelected = countriesInfo.find(
              (co) => co.name == countrySelect.options[countrySelect.selectedIndex].textContent
            );
            let city = getOptionsOfDB(urlCities, citySelect, countrySelected);
            citySelect.addEventListener("change", () => {
              addressInput.removeAttribute("disabled");
            });
            citySelect.removeAttribute("disabled");
          });
        }
      });
    });
  });
}

//funcion opciones ubicacion add contacto

function getOptionsOfDB(url, ctn, parentLocation) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => {
        info.forEach((el) => {
          if (parentLocation) {
            if (
              parentLocation.name == el.region ||
              parentLocation.name == el.country
            ) {
              let option = document.createElement("option");
              option.textContent = el.name;
              option.value = el.id;
              ctn.appendChild(option);
            }
          } else {
            let option = document.createElement("option");
            option.textContent = el.name;
            option.value = el.id;
            ctn.appendChild(option);
          }
        });
        resolve(info);
      });
  });
}

//function subir imagen

function uploadImg(imgP, imgU, file) {
  imgU.addEventListener("change", (e) => {

    if (file.length > 0) {
      file.shift()
    }

    file.push(e.target.files[0]);
    let imgCodified;
    // let reader = new FileReader();

    if (file[0].type == "image/jpeg" || file[0].type == "image/png" || file[0].type == "image/gif") {

      /* reader.onload = (e) => {
        imgP.src = e.target.result;
        console.log(e.target.result)
      };
      reader.readAsDataURL(file); */

      imgCodified = URL.createObjectURL(file[0])
      imgP.src = imgCodified

    } else {

      imgP.classList.add("archivoInvalido")
    }

  });
}
//funcion show Window

function showWindow(htmlText, btnId, ctnId) {
  body.insertAdjacentHTML("afterbegin", htmlText);
  body.classList.add('modalActive')

  let btnClose = document.getElementById(`${btnId}`);
  let container = document.getElementById(`${ctnId}`);

  btnClose.addEventListener("click", () => {
    container.remove();
    body.classList.remove('modalActive')
  });
}

function disableChannel() {
  let btns = document.querySelectorAll(".disableChannel");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let parent = e.target.parentNode;

      parent.classList.toggle("channelDisabled");
      let searchClass = parent.classList.contains("channelDisabled");
      if (searchClass) {
        parent.childNodes[3].childNodes[1].setAttribute("disabled", "");
        parent.childNodes[5].childNodes[1].setAttribute("disabled", "");
      } else {
        parent.childNodes[3].childNodes[1].removeAttribute("disabled");
        parent.childNodes[5].childNodes[1].removeAttribute("disabled");
      }
    });
  });
}

function inputLabels(input) {
  input.addEventListener("change", () => {
    if (input.value) {
      input.classList.add("inputActive");
    } else {
      input.classList.remove("inputActive");
    }
  });
}

//function tree view

function treeView() {
  let toggler = document.querySelectorAll(".caret");

  toggler.forEach(tog => {
    tog.addEventListener("click", e => {
      let ul = e.target.parentElement.querySelector(".nested")
      ul.classList.toggle("activeTView");
      tog.classList.toggle("caret-down");
    });
  })
}

//create contacts ul

function createContactsList(ctn, allContactsInfo, key) {

  let classInteres;

  if (allContactsInfo.length == 0) {
    ctn.classList.add('noContacts')
    ctn.innerHTML = `<span>No hay contactos para mostrar</span>`
  } else {

    ctn.classList.remove('noContacts');
    ctn.innerHTML = ``
    allContactsInfo.forEach(contact => {

      switch (contact.interest) {
        case 100:
          classInteres = "onehundred";
          break;
        case 75:
          classInteres = "seventyfive";
          break;

        case 50:
          classInteres = "fifty";
          break;
        case 25:
          classInteres = "twentyfive";
          break;
        case 0:
          classInteres = "cero";
          break;
      }
      //cambiar la img
      let country = contact.country.substring(0, 3)

      let contactHtml = `
          <li id="contact${contact.id}" class = "contactLi">
              <img src="assets/avatar.png" alt="contactImage">
              <div class="infoContact">
                  <p>${contact.name} ${contact.lastname}</p>
                  <p class="email">${contact.email}</p>
              </div>
              <div class="location">
                  <p class= "region">${contact.region}</p>
                  <p class="country">${contact.city}, ${country}</p>  
              </div>
              <p class="company">${contact.company}</p>
              <p class="cargo">${contact.position}</p>
              <div class="interes ${classInteres}">
                  <div class="bg_line"></div>
                  <div class="color_line"></div>
              </div>
          </li>
          `
      ctn.insertAdjacentHTML('beforeend', contactHtml);

      let companyDiv = document.querySelector('.contactLi >.company')

      if (key == "company") {
        companyDiv.remove()
      }

    })
  }

}

