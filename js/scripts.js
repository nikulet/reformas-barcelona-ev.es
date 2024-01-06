/*
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
/* Inicio en caso si la URL es null (no esta en ninguna pagina web va a executar este codigo) */
var currentURL = window.location.href;
if (currentURL.includes(null)) {
history.pushState(null, "index.html");  /* en caso si la url es www.reformas-barcelona-ev.es (es null) se va a
anadir www.reformas-barcelona-eval.es/index.html/  */
}  /* FIN en caso si la URL es null (no esta en ninguna pagina web va a executar este codigo) */

window.addEventListener('DOMContentLoaded', event => { /*  Inicio Evento addEventListener  */

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    var currentURL = window.location.href;

    if (currentURL.includes("Exitos-Proyectos-Reformas-Barcelona.html")) {
    // Activate SimpleLightbox plugin for portfolio items
    document.getElementById("portfolio-box1").innerHTML += `
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano2.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano3.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano4.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano5.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano6.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano7.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano8.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano9.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano10.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano11.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano12.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano13.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano14.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano15.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano16.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano17.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano18.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano19.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano20.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano21.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano22.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano23.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano24.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano25.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano26.jpg" title="Proyecto Reforma BAÑO"></a>
                                <a class="portfolio-box1" href="../foto-Reformas-Barcelona-EV/bano-Reformas-Barcelona-EV/Reformas-Bano27.jpg" title="Proyecto Reforma BAÑO"></a>`
    new SimpleLightbox({ elements: '#portfolio a.portfolio-box1' });
    
    document.getElementById("portfolio-box2").innerHTML += `
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina2.jpg" title="Proyecto Reforma COCINA"></a>
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina3.jpg" title="Proyecto Reforma COCINA"></a>
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina4.jpg" title="Proyecto Reforma COCINA"></a>
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina5.jpg" title="Proyecto Reforma COCINA"></a>
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina6.jpg" title="Proyecto Reforma COCINA"></a>
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina7.jpg" title="Proyecto Reforma COCINA"></a>
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina8.jpg" title="Proyecto Reforma COCINA"></a>
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina9.jpg" title="Proyecto Reforma COCINA"></a>
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina10.jpg" title="Proyecto Reforma COCINA"></a>
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina11.jpg" title="Proyecto Reforma COCINA"></a>
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina12.jpg" title="Proyecto Reforma COCINA"></a>
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina13.jpg" title="Proyecto Reforma COCINA"></a>
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina17.jpg" title="Proyecto Reforma COCINA"></a>
                                <a class="portfolio-box2" href="../foto-Reformas-Barcelona-EV/cucina-Reformas-Barcelona-EV/Reformas-Cusina44.jpg" title="Proyecto Reforma COCINA"></a> `
    new SimpleLightbox({ elements: '#portfolio a.portfolio-box2' });

    document.getElementById("portfolio-box3").innerHTML += `
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior1.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior2.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior3.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior4.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior5.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior6.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior7.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior8.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior9.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior10.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior11.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior12.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior13.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior14.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior15.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior16.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior17.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior18.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior19.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior20.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior21.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior22.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior23.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior24.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior25.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior26.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior27.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior28.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior29.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior30.jpg" title="Proyecto Reforma INTERIOR"></a>
                                <a class="portfolio-box3" href="../foto-Reformas-Barcelona-EV/interior-Reformas-Barcelona-EV/Reforma-Interior31.jpg" title="Proyecto Reforma INTERIOR"></a> `
    new SimpleLightbox({ elements: '#portfolio a.portfolio-box3' });

    document.getElementById("portfolio-box4").innerHTML += `
                                <a class="portfolio-box4" href="../foto-Reformas-Barcelona-EV/exterior-Reformas-Barcelona-EV/Reformas-Exterior1.jpg" title="Proyecto Reforma EXTERIOR"></a>
                                <a class="portfolio-box4" href="../foto-Reformas-Barcelona-EV/exterior-Reformas-Barcelona-EV/Reformas-Exterior2.jpg" title="Proyecto Reforma EXTERIOR"></a>
                                <a class="portfolio-box4" href="../foto-Reformas-Barcelona-EV/exterior-Reformas-Barcelona-EV/Reformas-Exterior3.jpg" title="Proyecto Reforma EXTERIOR"></a>
                                <a class="portfolio-box4" href="../foto-Reformas-Barcelona-EV/exterior-Reformas-Barcelona-EV/Reformas-Exterior4.jpg" title="Proyecto Reforma EXTERIOR"></a>
                                <a class="portfolio-box4" href="../foto-Reformas-Barcelona-EV/exterior-Reformas-Barcelona-EV/Reformas-Exterior5.jpg" title="Proyecto Reforma EXTERIOR"></a>  `
    new SimpleLightbox({ elements: '#portfolio a.portfolio-box4' });
    }
}); /*  FIN Evento addEventListener  */

/*  Para barra de progreso  */
window.addEventListener('load', () => {
    const progress = document.getElementById('progress');
    requestAnimationFrame(update);
})

function update() {
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(update);
}


/* Header cambio de IMG random */
const images = [

"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/1.jpg",
"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/2.jpg",
"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/3.jpg",
"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/4.jpg",
"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/5.jpg",
"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/6.jpg",
"./foto-Reformas-Barcelona-EV/carusel-fotos-Reformas-Barcelona/7.jpg",

];

var currentURL = window.location.href;

if (currentURL.includes("index.html")) {
// Estás en la página index.html

const imag = document.getElementById('fotoCarusel');
let currentIndex = 0;

function changeBackground() {
imag.style.backgroundImage = `url('${images[currentIndex]}')`;
currentIndex = (currentIndex + 1) % images.length;
}

// Oculta el carrusel hasta que todas las imágenes se hayan cargado por completo
imag.style.display = 'none';

// Precarga de imágenes
const preloadImages = images.map((imageSrc) => {
const img = new Image();
img.src = imageSrc;
img.onload = () => {
// Muestra el carrusel una vez que todas las imágenes se hayan cargado
imag.style.display = 'block';
};
});

setInterval(changeBackground, 1000);
}

const btn = document.getElementById('button');  /* Inicio Para enviar formulario a gmail  */

if(document.getElementById("form") != null){
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_kihxurp';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert(`Mensaje enviado con éxito!\nMuy pronto nos ponemos en contacto con tigo.\n¡Muchas gracias por confiar en nosotros!`);
    }, (err) => {
      btn.value = 'Enviar correo electrónico';
      alert(JSON.stringify(err));
    });
});
document.addEventListener('DOMContentLoaded', function(){  /* Inicio limpiar formulario que se envia a gmail  */
    let formulario = document.getElementById('form');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });  /* FIN limpiar formulario que se envia a gmail  */
}  /* FIN Para enviar formulario a gmail  */

/* ICON facebook */ 
document.getElementById("facebookICON").innerHTML += `
<div id="cajaTextoFacebook"><i class="bi bi-facebook"> </i><div id="textoFacebook">
<a id="facebookTexto" target="_blank" href="https://www.facebook.com/profile.php?id=100089800446369"> 
Facebook</a></div></div> `