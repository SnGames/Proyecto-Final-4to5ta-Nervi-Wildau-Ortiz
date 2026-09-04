//Imágenes
const bandera_lq = "url(images/bg/bandera_patio_lowq.webp)";
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

const change_bg = setInterval(() => {
    bg_image();
}, time);