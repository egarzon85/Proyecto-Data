let inputSearchUsers = document.getElementById('input_usuarios');
let btnSearchUsers = document.getElementById('search_usuarios');

btnSearchUsers.addEventListener("click", () => {
    searcherFunction(urlUsers, inputSearchUsers, usersSection);
});
inputSearchUsers.addEventListener("keyup", (event) => {

    if (event.key == "Enter") {

        event.preventDefault();
        searcherFunction(urlUsers, inputSearchUsers, usersSection);

    }
})