

function autenticar() {

    var user = document.getElementById('username').value
    var password = document.getElementById('password').value

    if (user.length !== 0 && password.length !== 0) {

        localStorage.setItem("Usuario", user)
        localStorage.setItem("Senha: ", password);
        getStatusLog();
        window.open('/pag-principal.html');

    } else {
        alert('Informe os dados de autenticação')
        
    }


}


function getStatusLog(){

    
    var user = localStorage.getItem('Usuario');

    if(user.length > 0){
        document.getElementById('status-login').innerText = user;
        document.getElementById('logado').style = 'display: flex;';
        document.getElementById('nao-logado').style = 'display: none;';
    } else {
        document.getElementById('logado').style = 'display: none;'
        document.getElementById('nao-logado').style = 'display: flex;'
    }



}

function logOff(){

    localStorage.clear();
    document.getElementById('logado').style = 'display: none;'
    document.getElementById('nao-logado').style = 'display: flex;'
    window.open('/pag-principal.html');
    
}