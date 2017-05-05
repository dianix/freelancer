var menu = document.getElementById("menu");
var linkPrincipal = document.getElementById("principal");
var secciones = document.getElementsByClassName("in-section");

var portfolio = secciones[0];
var about = secciones[1];
var contact = secciones[2];

function menuScroll() {
    var scrollCount = document.body.scrollTop;
     console.log(scrollCount);
    if (scrollCount > 60) {
        menu.style.lineHeight = "30px";
        linkPrincipal.style.fontSize = "20px";
    } else if (scrollCount < 60) {
        menu.style.lineHeight = "60px";
        linkPrincipal.style.fontSize = "27px";
    }

   /* if (scrollCount > 600 && scrollCount < 1300) {
        portfolio.setAttribute("class", "color");
    } else {
        portfolio.removeAttribute("class", "color");
    }

    if (scrollCount > 1301 && scrollCount < 2000) {
        about.setAttribute("class", "color");
    } else {
        about.removeAttribute("class", "color");
    }

    if (scrollCount > 2001 && scrollCount < 2430) {
        contact.setAttribute("class", "color");
    } else {
        contact.removeAttribute("class", "color");
    }*/
}

document.addEventListener("scroll", menuScroll);
