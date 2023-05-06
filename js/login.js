

function autenticar() {

    var user = document.getElementById('username').value
    var password = document.getElementById('password').value

    if (user.length !== 0 && password.length !== 0) {

        localStorage.setItem("Nome de Usuario", user)
        localStorage.setItem("Senha: ", password)
        document.getElementById('status-login').innerHTML =  'ola mundo';



    } else {
        alert('E-mail ou senha não inseridos')
    }


}