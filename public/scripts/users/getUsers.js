let usersSection = document.getElementById('usersSection');

function getUsers() {

    fetch(urlUsers)
        .then(res => res.json())
        .then(info => {
            createUsers(info)
        })
}
getUsers()

function createUsers(info) {
    createUsersCards(info)

    let actionsBtn = document.querySelectorAll(".acciones");
    let trashBtn = document.querySelectorAll('.acciones .trash')
    let editBtn = document.querySelectorAll('.acciones .edit')
    actionsBtn.forEach(ac => {
        ac.addEventListener('mouseover', (e) => {
            ac.classList.add('active');
        })
        ac.addEventListener('mouseout', (e) => {
            ac.classList.remove('active');
        })
    })
    trashBtn.forEach(tr => {
        tr.addEventListener('click', () => {
            let parent = tr.parentNode.parentNode
            showDeleteModal(parent)
        })
    })
    editBtn.forEach(ed => {
        ed.addEventListener('click', () => {
            let parentId = ed.parentNode.parentNode.id
            let id = parentId.replace("user", "")
            let infoUser = info.find(user => user.id == id);
            editUserModal(infoUser)
        })
    })
}

function createUsersCards(info) {
    let rol;
    info.forEach(user => {
        if (user.is_admin == 1) {
            rol = "administrador"
        } else {
            rol = "básico"
        }
        let newUserHtml = `<article class="user_card" id="user${user.id}">
            <div class="acciones">
                <i class="dots">•••</i>
                <i class="fas fa-trash trash"></i>
                <i class="fas fa-edit edit"></i>
            </div>
            <h2>${user.name} ${user.lastname}</h2>
            <p class="email">Email: <span>${user.email}</span></p>
            <p>Rol: ${rol}</p>            
        </article>
        `

        usersSection.insertAdjacentHTML('beforeend', newUserHtml)
    })
}
function showDeleteModal(parent) {
    let nameUser = parent.querySelector('h2').textContent
    showWindow(deleteUserWindowHTML(nameUser), 'closeDelContactBtn', 'bgdeleteContact')

    let delConfirmBtn = document.getElementById('delConfirmBtn')

    delConfirmBtn.addEventListener('click', () => {
        let container = document.getElementById("bgdeleteContact")
        container.remove()
        body.classList.remove('modalActive')
        deleteContact(parent)
    })


}
function deleteContact(parent) {
    let id = parent.id
    id = id.replace("user", "")

    let url = `${urlUsers}/${id}`
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
function editUserModal(info) {

    showWindow(htmlTextEditUser(info), "closeAddUserBtn", "bgAddUser");
    let form = document.getElementById('form');
    let cancelBtn = document.getElementById("cancelBtn");
    cancelBtn.addEventListener("click", () => {
        let ctn = document.getElementById("bgAddUser");
        body.classList.remove('modalActive')
        ctn.remove();
    });

    sendToBd(form, 'PUT', info.id)
}

function sendToBd(form, method, id) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let newUrlUsers;
        let formData = new FormData(e.currentTarget);
        formData.set('token', token)

        if (method == 'PUT') {
            newUrlUsers = `${urlUsers}/${id}`
        } else {
            newUrlUsers = urlUsers
        }
        if (formData.get('password') != formData.get('repeatPassword')) {
            console.log("las contraseas no son iguales")
            return
        }
        for (var pair of formData.entries()) {

            if (pair[1] == "") {
                console.log("falta rellenar el campo de " + pair[0])
                return
            }
        }
        let params = {
            method: `${method}`,
            type: 'no-cors',
            body: formData,
        };
        fetch(newUrlUsers, params)
            .then(res => {
                if (res.status == 409) {
                    console.log("Este usuario ya existe")
                } else {
                    location.reload()
                }
            })
            .catch(err => console.log(err))
    })
}