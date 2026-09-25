//Imágenes
const bandera_lq = "url(images/bg/bandera_patio_lowq.webp)"; //No se usa para el header porque tiene baja calidad
const autos = "url(images/bg/dos_autos.webp)";
const escenario = "url(images/bg/escenario.webp)";
const taller_arriba = "url(images/bg/taller_autos_desde_arriba.webp)";
const taller_autos = "url(images/bg/taller_autos.webp)";
const taller_gente = "url(images/bg/taller_gente_auto.webp)";
const taller_panoramica = "url(images/bg/taller_panoramica.jpg)";

const images = [taller_panoramica, escenario, taller_gente, taller_autos, autos, taller_arriba];

let bg_index = 1;
let time = 5000;
let layer = false;

function bg_image() {
    bg_index++;
    layer = !layer;
    if (bg_index >= images.length) {
        bg_index = 0;
    }
    const l1 = document.querySelector("#img1");
    const l2 = document.querySelector("#img2");
    console.log(images[bg_index]);
    console.log(layer);

    if (layer) {
        l1.style.opacity = 0;
        l2.style.opacity = 1;
    } else {
        l1.style.opacity = 1;
        l2.style.opacity = 0;
    }

    setTimeout(() => {
        if (layer) {
            l1.style.backgroundImage = images[bg_index];
        } else {
            l2.style.backgroundImage = images[bg_index];
        }
        
    }, 1000);
    console.log(l1.style.opacity);
    console.log(l2.style.opacity);
}

//Para el cambio de imagen del header
const change_bg = setInterval(() => {
    bg_image();
}, time);

//Header y footer sincronizados
class cHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header><div class="alpha">
        <div class="logos">

            <a href="computacion.html"> <img class="icono_boton logo_carreras" src="images/icono_computacion.png" alt="Botón de Computación"> </a>
            
            <img id="logo" src="images/logo_escuela_75_largo.png" alt="Logo de la Escuela Técnica N°35"/>

            <a href="automotor.html"> <img class="icono_boton logo_carreras" src="images/icono_automotor.png" alt="Botón de automotor"> </a>
            

        </div>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="institucional.html">Institucional</a></li>
                <li><a href="carreras.html">Carreras</a></li>
            </ul>
        </nav>
    </div><div id="img1" class="img"></div><div id="img2" class="img"></div></header>`;
    }
}

customElements.define('custom-header', cHeader);

class cFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer>
        <h2>Escuela Técnica N°35 - Ing. Eduardo Latzina</h2>
        <p>Creado por: Ezequiel Nervi, Santiago Wildau y Johnatan Ortiz 4°5°</p>
        <p>Sitio en construcción... por ahora</p>
    </footer>`;
    }
}

customElements.define('custom-footer', cFooter);
