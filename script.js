//Imágenes de la escuela
const bandera_lq = "url(images/bg/bandera_patio_lowq.webp)"; //No se usa para el header porque tiene baja calidad
const autos = "url(images/bg/dos_autos.webp)";
const escenario = "url(images/bg/escenario.webp)";
const taller_arriba = "url(images/bg/taller_autos_desde_arriba.webp)";
const taller_autos = "url(images/bg/taller_autos.webp)";
const taller_gente = "url(images/bg/taller_gente_auto.webp)";
const taller_panoramica = "url(images/bg/taller_panoramica.jpg)";

const buffet = "url(images/bg/buffet.jpeg)";
const canchas = "url(images/bg/cancha_futbol.jpeg)";
const canchas2 = "url(images/bg/cancha_voley_basquet.jpeg)";
const estatua = "url(images/bg/estatua_patio.jpeg)";
const globo = "url(images/bg/globo_escenario.jpeg)";
const patio = "url(images/bg/patio_interno.jpeg)";
const patio_taller = "url(images/bg/patio_taller.jpeg)";
const patio_taller2 = "url(images/bg/patio_taller2.jpeg)";


const images = [escenario, patio_taller, canchas, globo, patio_taller2, canchas2, estatua, patio, buffet];
//Este array sirve para determinar la posición de la imágen de fondo
const pos_img = ["center", "center 25%", "center", "center 40%", "center", "center 25%", "center 20%", "center", "center"];

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

const compus_cerca = "url(images/lab_images/compus_cerca.jpeg)";
const compus_cerca2 = "url(images/lab_images/compus_cerca2.jpeg)";
const lab_lejos = "url(images/lab_images/lab_lejos.jpeg)";
const lab_ventanas = "url(images/lab_images/lab_ventanas.jpeg)";
const sillas_compus = "url(images/lab_images/sillas_compus.jpeg)";

const patio_panoramica = "url(images/bg/patio_taller_panoramica.jpg)"; //Al final sin usar

const carreras_img = [lab_ventanas, taller_arriba, taller_autos, compus_cerca, taller_gente, sillas_compus, taller_panoramica, lab_lejos, patio_panoramica, compus_cerca2, autos];

let bg_index = [1]; //Index de las imágenes del header
let bg_index_suyai = [1]; //Index de las imágenes de la sección del suyai inv
let bg_index_suyai2 = [1]; //Index de las imágenes de la sección del suyai ver
let bg_index_carreras = [1]; //Index de las imágenes de la sección de carreras
let time = 5000;
let offset = 200; //Offset del cambio de bg de suyai ver
let offset_c = 2500; //Offset del cambio de bg de la sección de carreras
let layer = [false]; //Header
let layer_suyai = [false]; //Suyai inv
let layer_suyai2 = [false]; //Suyai ver
let layer_carreras = [false]; //Carreras

function bg_image(images, id_i1, id_i2, bg_index, layer, pos=Array(images.length).fill("center")) {
    bg_index[0]++; //Se aumenta 1 en la posición del array de las imágenes
    layer[0] = !layer[0]; //Se invierte que capa se usa

    //Si se desborda el índice vuelve a 0
    if (bg_index[0] >= images.length) {
        bg_index[0] = 0;
    }

    const l1 = document.querySelector(id_i1);
    const l2 = document.querySelector(id_i2);
    if (!l1 || !l2) {
        return undefined;
    }

    //Se intercambia la opacidad de las capas
    if (layer[0]) {
        l1.style.opacity = 0;
        l2.style.opacity = 1;
    } else {
        l1.style.opacity = 1;
        l2.style.opacity = 0;
    }

    //Se cambia la imagen dependiendo de que capa está activa
    setTimeout(() => {
        if (layer[0]) {
            l1.style.backgroundImage = images[bg_index[0]];
            l1.style.backgroundPosition = pos[bg_index[0]];
        } else {
            l2.style.backgroundImage = images[bg_index[0]];
            l2.style.backgroundPosition = pos[bg_index[0]];
        }
        
    }, 1000);
}

//Para el cambio de imagen del header
const change_bg = setInterval(() => {
    bg_image(images, "#img1", "#img2", bg_index, layer, pos_img);
}, time);

//Cambio de imagen de la sección del suyai: invierno
const change_bg_suyai = setInterval(() => {
    bg_image(inv_suyai, "#img3", "#img4", bg_index_suyai, layer_suyai);
}, time);

//Cambio de imagen de la sección del suyai: verano
const change_bg_suyai2 = setTimeout(() => {setInterval(() => {
    bg_image(ver_suyai, "#img5", "#img6", bg_index_suyai2, layer_suyai2);
}, time)}, offset); //Offset con respecto a la imagen de al lado

const change_bg_carreras = setTimeout(() => {setInterval(() => {
    bg_image(carreras_img, "#img7", "#img8", bg_index_carreras, layer_carreras);
}, time)}, offset_c); //Offset con respecto al header


//Header y footer sincronizados

//Header custom
class cHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header><div class="alpha">
        <a id="link_logo" href="index.html"> <img id="logo" src="images/logo_escuela_75_largo.png" alt="Logo de la Escuela Técnica N°35"/> </a>

        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="institucional.html" title="Conocé la historia de la escuela">Institucional</a></li>
                <li><a href="carreras.html" title="Descubre las carreras disponibles en la escuela">Carreras</a></li>
                <li><a href="suyai.html" title="Campamento para alumnos">Suyai</a></li>
                <li><a href="comunidad.html" title="Egresados, distribución laboral, etc.">Comunidad Educativa</a></li>
                <li><a href="contacto.html" title="Contactar a la escuela">Contacto</a></li>
            </ul>
        </nav>
        <div class="nav_mask"></div>
    </div><div id="img1" class="img"></div><div id="img2" class="img"></div></header>`;
    }
}

//Se asigna a una etiqueta custom
customElements.define('custom-header', cHeader);

const bajar_px = 300;

//Footer custom
class cFooter extends HTMLElement { /*modificado por nervi porque tampoco andaba tu boton*/
    connectedCallback() {
        this.innerHTML = `<button id="volver_arriba">Volver arriba</button> 
        
        <footer>
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
        </div>
        <div>
            <h2>Contacto de la escuela</h2>
            <p><a href="mailto:det_35_de18@bue.edu.ar">Email: det_35_de18@bue.edu.ar</a></p>
            <p>Teléfono/Fax: 4567-5838/1441</p>
        </div>
        
    </footer>`;
    

    const volver_arriba = this.querySelector("#volver_arriba");

    volver_arriba.addEventListener("click", volver_al_inicio); /*añadido por nervi, conecta el click a la funcion*/

    window.addEventListener("scroll", function() {

        if (document.body.scrollTop > bajar_px || document.documentElement.scrollTop > bajar_px) {
            volver_arriba.classList.add("visible");
        } else {
            volver_arriba.classList.remove("visible");
        }

    });

    function volver_al_inicio() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    }
}

//Se asigna a una etiqueta custom
customElements.define('custom-footer', cFooter);

//Para que no te recargue la página al tocar el botón de la página en la que estás
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.href === window.location.href) {
            e.preventDefault();
        }
    });
});

//Función para elegir índice aleatorio en una lista
function random_choice(array) {
    //Si el array esta vacío no te va a devolver nada
    if (!array.length) {
        return undefined;
    }

    //Math.random() da un número con coma aleatorio desde el 0 al 1, al multiplicarlo por el tamaño del array te da un número entre 0 y el tamaño del array y luego se lo redondea para abajo para que se pueda usar como índice
    let i = Math.floor(Math.random() * array.length);

    return array[i]; //Te devuelve el elemento elegido
}

//Curiosidades xdxd
const container = document.getElementById("div_curiosidades");

const curiosidades = ["...la escuela cuenta con canchas de fútbol, voley y básquet?",
    "...contamos con un curso de AutoCAD y otros programas similares?",
    "...tenemos impresoras 3D?",
    "...hay 4 diferentes laboratorios de computación dentro de la escuela?",
    "...se organizan torneos de dibujo técnico en la escuela, y competiciones con otras escuelas?",
    "...hay torneos tanto internos como externos de ajedrez, pin-pon, fútbol, vóley, básquet, entre otros deportes?",
    "...el año que viene se agregará una nueva especialidad a la escuela?",
    "...ya entramos en el modelo de Secundaria Aprende?"
]

//Esto lo ejecuta una vez al iniciar la pagina
document.addEventListener("DOMContentLoaded", () => {
    const curios_id = document.getElementById("curiosidades");
    if (!curios_id) {
        return undefined;
    }

    setTimeout(() => {
        let curiosidad = random_choice(curiosidades);
        curios_id.textContent = curiosidad;
    }, 350);
});


if (container) { //modificada por nervi, antes asumia que existia el container, dando por resultado que se crashe y detenga el java en el resto de paginas
    container.addEventListener("toggle", () => {
        const curios_id = document.getElementById("curiosidades");
        if (!curios_id) {
            return undefined;
        }

        if (!container.open) { 
            setTimeout(() => {
                let curiosidad = random_choice(curiosidades); //Se elige una curiosidad random
                curios_id.textContent = curiosidad; //Se la coloca en el html
            }, 350); //El timeout es para que se cambie luego de que haga la transición de cerrarse
        }
    });
}

//Nav que te siga
const nav = document.querySelector("nav");
const nav_mask = document.querySelector(".nav_mask");

window.addEventListener("scroll", function() {

        if (document.body.scrollTop > bajar_px + 100 || document.documentElement.scrollTop > bajar_px + 100) {
            nav.classList.add("fixed");
            nav_mask.classList.add("fixed");
            nav.style.opacity = 1;
        } else if (document.body.scrollTop > bajar_px || document.documentElement.scrollTop > bajar_px) {
            nav.style.opacity = 0;
        } else {
            nav.classList.remove("fixed");
            nav_mask.classList.remove("fixed");
            nav.style.opacity = 1;
        }

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








//----------------Ortiz--------------------------------------------------//
const tarjetasTexto = document.querySelectorAll('.tarjetablanca');
let indiceActual = 0;
let animando = false; // Evita que se trabe si mantienes apretada la tecla

// Marca la primera tarjeta como activa al cargar
if (tarjetasTexto.length > 0) {
  tarjetasTexto[0].classList.add('activa');
}

// Función para mover el scroll con una curva de velocidad más elegante
function desplazarSuave(elemento, duracion = 650) {
  animando = true;
  const inicio = window.scrollY;
  // Calcula la posición para dejar la tarjeta centrada en la pantalla
  const rect = elemento.getBoundingClientRect();
  const destino = inicio + rect.top - (window.innerHeight / 2) + (rect.height / 2);
  const distancia = destino - inicio;
  let tiempoInicio = null;

  function animacion(tiempoActual) {
    if (!tiempoInicio) tiempoInicio = tiempoActual;
    const progreso = Math.min((tiempoActual - tiempoInicio) / duracion, 1);

    // Curva easeInOutCubic (arranca suave, acelera en el medio y frena despacio)
    const curva = progreso < 0.5
      ? 4 * progreso * progreso * progreso
      : 1 - Math.pow(-2 * progreso + 2, 3) / 2;

    window.scrollTo(0, destino/*inicio + distancia * curva*/); //modificado por wildau, gracias a la propiedad css scroll-behavior: smooth no se necesita calcular manualmente la curva de velocidad

    if (progreso < 1) {
      requestAnimationFrame(animacion);
    } else {
      animando = false;
    }
  }

  requestAnimationFrame(animacion);
}

// Actualiza cuál tarjeta tiene el efecto visual
function actualizarTarjetaActiva(nuevoIndice) {
  tarjetasTexto.forEach((tarjeta, i) => {
    tarjeta.classList.toggle('activa', i === nuevoIndice);
  });
  desplazarSuave(tarjetasTexto[nuevoIndice], 650); // 650ms
}

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'ArrowDown') {
    evento.preventDefault();
    if (!animando && indiceActual < tarjetasTexto.length - 1) {
      indiceActual++;
      actualizarTarjetaActiva(indiceActual);
    }
  } 
  
  else if (evento.key === 'ArrowUp') {
    evento.preventDefault();
    if (!animando && indiceActual > 0) {
      indiceActual--;
      actualizarTarjetaActiva(indiceActual);
    }
  }
});
//------------------------FIN ORTIZ-------------------------------------------//

