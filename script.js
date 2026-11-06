//Imágenes de la escuela
const bandera_lq = "url(images/bg/bandera_patio_lowq.webp)"; //No se usa para el header porque tiene baja calidad
const autos = "url(images/bg/dos_autos.webp)";
const escenario = "url(images/bg/escenario.webp)";
const taller_arriba = "url(images/bg/taller_autos_desde_arriba.webp)";
const taller_autos = "url(images/bg/taller_autos.webp)";
const taller_gente = "url(images/bg/taller_gente_auto.webp)";
const taller_panoramica = "url(images/bg/taller_panoramica.jpg)";

const images = [taller_panoramica, escenario, taller_gente, taller_autos, autos, taller_arriba];

//Imágenes del campamento de invierno Suyai
const inv_cartel = "url(images/suyai_images/1.jpeg)";
const inv_casa = "url(images/suyai_images/2.jpeg)";
const inv_interior = "url(images/suyai_images/3.jpeg)";
const inv_de_lado = "url(images/suyai_images/4.jpeg)";

const inv_suyai = [inv_cartel, inv_casa, inv_interior, inv_de_lado];

const ver_de_lado = "url(images/suyai_images/5.jpeg)";
const ver_casa = "url(images/suyai_images/8.jpeg)";
const ver_arboles = "url(images/suyai_images/9.jpeg)";
const ver_playa = "url(images/suyai_images/10.jpeg)";
const ver_lago = "url(images/suyai_images/11.jpeg)";
const ver_lago_lejos = "url(images/suyai_images/12.jpeg)";
const ver_poster = "url(images/suyai_images/13.jpeg)";

const ver_suyai = [ver_de_lado, ver_casa, ver_arboles, ver_playa, ver_lago, ver_lago_lejos, ver_poster];

let bg_index = [1]; //Index de las imágenes del header
let bg_index_suyai = [1]; //Index de las imágenes de la sección del suyai inv
let bg_index_suyai2 = [1]; //Index de las imágenes de la sección del suyai ver
let time = 5000;
let layer = [false]; //Header
let layer_suyai = [false]; //Suyai inv
let layer_suyai2 = [false]; //Suyai ver

function bg_image(images, id_i1, id_i2, bg_index, layer) {
    bg_index[0]++;
    layer[0] = !layer[0];
    if (bg_index[0] >= images.length) {
        bg_index[0] = 0;
    }
    const l1 = document.querySelector(id_i1);
    const l2 = document.querySelector(id_i2);
    console.log(images[bg_index[0]]);
    console.log(layer[0]);

    if (layer[0]) {
        l1.style.opacity = 0;
        l2.style.opacity = 1;
    } else {
        l1.style.opacity = 1;
        l2.style.opacity = 0;
    }

    setTimeout(() => {
        if (layer[0]) {
            l1.style.backgroundImage = images[bg_index[0]];
        } else {
            l2.style.backgroundImage = images[bg_index[0]];
        }
        
    }, 1000);
    console.log(l1.style.opacity);
    console.log(l2.style.opacity);
}

//Para el cambio de imagen del header
const change_bg = setInterval(() => {
    bg_image(images, "#img1", "#img2", bg_index, layer);
}, time);

//Cambio de imagen de la sección del suyai: invierno
const change_bg_suyai = setInterval(() => {
    bg_image(inv_suyai, "#img3", "#img4", bg_index_suyai, layer_suyai);
}, time);

//Cambio de imagen de la sección del suyai: verano
const change_bg_suyai2 = setInterval(() => {
    bg_image(ver_suyai, "#img5", "#img6", bg_index_suyai2, layer_suyai2);
}, time);

//Header y footer sincronizados
class cHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header><div class="alpha">
        <a id="link_logo" href="index.html"> <img id="logo" src="images/logo_escuela_75_largo.png" alt="Logo de la Escuela Técnica N°35"/> </a>

        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="institucional.html">Institucional</a></li>
                <li><a href="carreras.html">Carreras</a></li>
                <li><a href="suyai.html">Suyai</a></li>
                <li><a href="comunidad.html">Comunidad Educativa</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
    </div><div id="img1" class="img"></div><div id="img2" class="img"></div></header>`;
    }
}

customElements.define('custom-header', cHeader);

class cFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer>
        <div>
            <ul>
                
                <li><a href="index.html" class="bold">Inicio</a></li>
                <li><a href="institucional.html" class="bold">Institucional</a></li>
                <li><a href="contacto.html" class="bold">Contacto</a></li>
                <li><a href="carreras.html" class="bold">Carreras</a></li>
                <li><a href="automotor.html">Automotor</a></li>
                <li><a href="computacion.html">Computación</a></li>
                <li><a href="suyai.html" class="bold">Suyai</a></li>
                <li><a href="comunidad.html" class="bold">Comunidad Educativa</a></li>
            </ul>
        </div>
        <div>
            <h2>Escuela Técnica N°35 - Ing. Eduardo Latzina</h2>
            <p>Creado por: Ezequiel Nervi, Santiago Wildau y Johnatan Ortiz 4°5°</p>
            <p>Sitio en construcción... por ahora</p>
        </div>
        <div>
            <h2>Contacto de la escuela</h2>
            <p>Email: det_35_de18@bue.edu.ar</p>
            <p>Teléfono/Fax: 4567-5838/1441</p>
        </div>
        
    </footer>`;
    }
}

customElements.define('custom-footer', cFooter);

//Para que no te recargue la página al tocar el botón de la página en la que estás
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.href === window.location.href) {
            e.preventDefault();
        }
    });
});

//---------------------------parte de nervi--------------------------


document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelector("#carrusel");
    if (!carrusel) return; // si la página no tiene carrusel, no hace nada

    const slides = carrusel.querySelectorAll(".slide");
    const btnPrev = carrusel.querySelector(".prev");
    const btnNext = carrusel.querySelector(".next");

    const TIEMPO = 5000; 
    let actual = 0;
    let timer;

    function mostrar(indice) {
        slides[actual].classList.remove("active");
        
        actual = (indice + slides.length) % slides.length;
        slides[actual].classList.add("active");
    }

    
    function programar(espera) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            mostrar(actual + 1);
            programar(TIEMPO); 
        }, espera);
    }

    btnNext.addEventListener("click", () => {
        mostrar(actual + 1);
        programar(TIEMPO * 2); 
    });

    btnPrev.addEventListener("click", () => {
        mostrar(actual - 1);
        programar(TIEMPO * 2);
    });

    programar(TIEMPO);
});

