window.onload = function(){
    var url = 'http://hakim.profrodolfo.com.br/receitas.php/cadastroU.php';
    var nome = document.querySelector('#nome');
    var email = document.querySelector('#email');
    var data = document.querySelector('#dt_nasc');
    var senha = document.querySelector('#senha');

    var formData = new FormData();
    formData.append('nome', nome.value);
    formData.append('email', email.value);
    formData.append('dt_nasc', data.value);
    formData.append('senha', senha.value);

    fetch(url, { method: 'POST', body: formData})
    .then(function (response) {
        alert(response);
    })
    .then(function (body) {
        alert(body);
    });
}

