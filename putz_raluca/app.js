let input = document.getElementById('input_url')
let img = document.getElementById('fotinha')

function enviar() {
    let caminhoDaImagem = input.value
    img.src = `${caminhoDaImagem}`
    img.style.opacity = '100%'
};
