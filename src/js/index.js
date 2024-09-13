const formulario = document.getElementById("form")

formulario.addEventListener('submit', function(click) {
    click.preventDefault()

    const campos = document.querySelectorAll("#form input")

    campos.forEach(function(campo) {
        const erroLabel = campo.nextElementSibling

        // erro
        if (campo.value === "") {
            campo.classList.add("input-error")
            campo.classList.remove("input-success")
            erroLabel.style.display = 'block'
        } else { // sucesso
            campo.classList.remove('input-error');
            campo.classList.add('input-success');
            erroLabel.style.display = 'none';
        }
    })
})
