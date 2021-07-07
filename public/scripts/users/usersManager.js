let addUserBtn = document.getElementById("addUser");

addUserBtn.addEventListener("click", () => {
    showWindow(htmlTextAddUser, "closeAddUserBtn", "bgAddUser");

    let floatingInput = document.querySelectorAll(".form-control");
    let cancelBtn = document.getElementById("cancelBtn");
    let form = document.getElementById('form');

    floatingInput.forEach((input) => {
        inputLabels(input)
    });

    cancelBtn.addEventListener("click", () => {
        let ctn = document.getElementById("bgAddUser");
        body.classList.remove('modalActive')
        ctn.remove();
    });

    sendToBd(form, 'POST')
});
