let formLogin = document.getElementById('formLogin')
formLogin.addEventListener('submit', e => {

    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    let params = {
        method: 'POST',
        type: 'no-cors',
        body: formData
    };

    for (var pair of formData.entries()) {

        if (pair[1] == "") {
            console.log("falta rellenar el campo de " + pair[0])
            return
        }
    }
    fetch('http://localhost:3000/login', params)
        .then(res => res.json())
        .then(data => {
            if(data.user){
                localStorage.setItem("token", data.jwt)
                location.href = "http://127.0.0.1:5500/public/index.html";
            }else{
                console.log("usuario incorrecto")
            }

        })
        .catch(err => console.log(err))
})