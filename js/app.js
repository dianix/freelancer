var menu = document.getElementById("menu");
var linkPrincipal = document.getElementById("principal");
var secciones = document.getElementsByClassName("in-section");


function cabezalCambio() {
    console.log(scrollY);
    
    if (window.scrollY > 80) {
       menu.style.lineHeight = "30px";
       linkPrincipal.style.fontSize = "20px";
    } else if (window.scrollY < 80) {
        menu.style.lineHeight = "60px";
        linkPrincipal.style.fontSize = "27px";
    }
    
    if (window.scrollY > 600 && window.scrollY < 1300) {
        secciones[0].style.backgroundColor = "#18BC9C";
    } else if (window.scrollY < 1310 && window.scrollY > 1300) {
        secciones[0].style.backgroundColor = "rgba(24, 188, 156, 0)";
    }
    
    if (window.scrollY > 1310 && window.scrollY < 2000) {
        secciones[1].style.backgroundColor = "#18BC9C";
    } else if (window.scrollY < 1310 && window.scrollY > 2000) {
        secciones[1].style.backgroundColor = "rgba(24, 188, 156, 0)";
    }
}

document.addEventListener("scroll", cabezalCambio);