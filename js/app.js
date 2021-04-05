// Implementação do menu responsivo

function showMenu(y) {
    y.classList.toggle("change");
    
    var x = document.getElementById("menuLinks");
    console.log('clique');
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
} 
