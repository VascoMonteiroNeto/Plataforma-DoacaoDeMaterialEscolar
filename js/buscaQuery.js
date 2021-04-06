//Armazena o valor do botão para ser usado na próxima página(renderização dinâmica)
const butSlc = document.getElementById("buttonQuery");

butSlc.addEventListener('click', () => {
    estado = document.getElementById("estadoSelect");
    console.log(estado.value)
    localStorage.setItem('estado', estado.value);
});