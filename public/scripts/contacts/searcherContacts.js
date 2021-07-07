let inputSearchContacts = document.getElementById('input_contactos');
let btnSearchContacts = document.getElementById('search_contactos');

btnSearchContacts.addEventListener("click", () => { searcherFunction(urlContacts, inputSearchContacts, contactsSection); });
inputSearchContacts.addEventListener("keyup", (event) => {

    if (event.key == "Enter") {

        event.preventDefault();
        searcherFunction(urlContacts, inputSearchContacts, contactsSection);

    }
})