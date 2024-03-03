const form = document.getElementById('form-numero');

function validaNumero() {
    const valorPrimeiro = parseInt(document.getElementById('primeiro').value)+1;
    const valorSegundo = parseInt(document.getElementById('segundo').value);
    return valorSegundo < valorPrimeiro;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();
    formEValido = validaNumero();
    if (formEValido) {
        alert ("O valor do segundo numero deve ser maior que o primeiro")
    }
    else {
        alert("Tudo certo")
        primeiro.value = ' ';
        segundo.value = ' ';
    }
})