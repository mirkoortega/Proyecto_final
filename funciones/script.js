//Funcionalidades


// Inicio 
const URL_INICIO = '../datos/informacion.json'; 

async function cargarInicio() {
  try {
    const respuesta = await fetch(URL_INICIO);
    const data = await respuesta.json();

    const inicio = data['primera-parte']; 
    const contenedor = document.getElementById('hero');

    const articulo = document.createElement('article');

    articulo.innerHTML =
      "<img src='" + inicio['img-hero'] + "' alt='Ilustración'>" +
      "<h1>" + inicio.titular + "</h1>" +
      "<h4>" + inicio.categoria + "</h4>" +
      "<p>" + inicio['frase-descriptiva'] + "</p>";

    contenedor.appendChild(articulo);

  } catch (error) {
    console.error("Error al cargar el proyecto:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarInicio);



//Leyendas

const URL_LeyendaMito = '../datos/leyendas-mitos.json'; 

async function cargarLeyenMito() {
  try {
    const respuesta = await fetch(URL_LeyendaMito);
    const data = await respuesta.json();

    // Acceder correctamente al array
    const primer = data["leyendas-misticas"][0];

    // Obtener elementos (primer elemento de la clase)
    const tituloEl = document.getElementsByClassName('titulo')[0];
    const textoEl = document.getElementsByClassName('masa-texto')[0];
    const imagenEl = document.getElementsByClassName('imagenLM')[0];

    // Asignar contenido
    tituloEl.textContent = primer.titulo;
    textoEl.textContent = primer["masa-texto"];
    imagenEl.src = primer["img-leyenda"];

  } catch (error) {
    console.error("Error al cargar la información:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarLeyenMito);




// Sobre proyecto
const URL_PROY = '../datos/sobre-proyecto.json'; 

async function cargarProyecto() {
  try {
    const respuesta = await fetch(URL_PROY);
    const data = await respuesta.json();

    const proy = data.sobreProyecto;
    const contenedor = document.getElementById('sobre-proyecto');

    const articulo = document.createElement('article');

    articulo.innerHTML =
      "<h1>" + proy.titulo + "</h1>" +
      "<h2>" + proy.nombre + "</h2>" +
      "<p>" + proy.descripcion + "</p>";

    contenedor.appendChild(articulo);

  } catch (error) {
    console.error("Error al cargar el proyecto:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarProyecto);



// Creditos
//const URL_PROY = '../datos/sobre-proyecto.json'; 

async function cargarCreditos() {
  try {
    const respuesta = await fetch(URL_PROY);
    const data = await respuesta.json();

    const proy = data.creditos;
    const contenedor = document.getElementById('creditos');

    const articulo = document.createElement('article');

    articulo.innerHTML =
      "<h1>" + proy.titulo + "</h1>" +
      "<p>" + proy.descripcion + "</p>";

    contenedor.appendChild(articulo);

  } catch (error) {
    console.error("Error al cargar el proyecto:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarCreditos);
