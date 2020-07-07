import { Injectable } from '@angular/core';
// Importar environment donde se guardo la API KEY por defecto
import { environment } from 'src/environments/environment';
import { NgStyle } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServicioAPIService {

  constructor() { }

  /**
   * Método para construir la url del recurso que se va a consumir
   * luego llama al método del servicio obtenerDatosAPI()
   * => Recibe como parámetro el id del botón 
   * @param item 
   */
  construirUrl (item) {
    let url = `http://gateway.marvel.com/v1/public/${item}?ts=1&apikey=${environment.apikey}&limit=100`;
    /**
     * Llamar método obtenerDatosAPI() propio del servicio
     * => Recibe como parámetro la url construida
     */
    this.obtenerDatosAPI(url, item);
  }


  /**
   * Función para hacer Get a la API, obtener una respuesta
   * y los datos, se usa la funcionalidad fetch API interfaz propia 
   * del lenguaje JS para trabajar con el estándar HTTPRequest
   * => Recibe como parámetro la url que se va a consumir o consultar
   * @param url 
   */
  obtenerDatosAPI (url, item) {
    fetch(url)
      .then((resp => {
        return resp.json();
      }))
      .then((datos => { 
        /**
         * Una vez obtenidos los datos llamar el método que se encargará 
         * de mostrar la información en cards dentro del contenedor principal 
         * por medio de un swicth sabrá que información mostrar.
         */
        switch (item) {
          case 'characters': {
            setTimeout( ()=> {
              this.pintarCharacters(datos);
            }, 800);
            break;
          }
          case 'comics': {
            setTimeout( ()=> {
              this.pintarComics(datos);
            }, 800);
            break;
          }
          case 'creators': {
            setTimeout( ()=> {
              this.pintarCreators(datos);
            }, 800);
            break;
          }
          case 'stories':{
            setTimeout( ()=> {
              this.pintarStories(datos);
            }, 800);
            break;
          }
          case 'series': {
            setTimeout( ()=> {
              this.pintarSeries(datos);
            }, 800);
            break;
          }
          default: {
            alert('La opción seleccionada no es válida!!');
            break;
          }
        } 
      }))
      .catch((error) => {
        alert(`Hubo errores en la consulta a la API, error: \n${error}`);
      })
  }

  // Método para pintar Personajes
  pintarCharacters(datos) {
    const contenedor = document.getElementById('contenedorCards');
    let templateHTML = "";

    for (const hero of datos.data.results) {
      if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
        continue;
      } else {
        let urlHero = hero.urls[0].url;
        templateHTML += `
          <div class="card" style="width: 19rem;" >
              <a href="${urlHero} target="_blank" >
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="imagen-character" />
              </a><br/>
              <div class="card-title">${hero.name}</div>
          </div>
        `;
      }
    }

    /**
     * Estilos para el contenedor principal
     */
    contenedor.style.paddingTop = "5rem";
    contenedor.style.borderRadius = ".8rem";
    contenedor.style.background = "#3536367a";
    // Agregar el template literal al contenedor que deseamos mostrar la información
    document.querySelector('#contenedorCards').innerHTML = templateHTML;
  }

  pintarComics(datos) {
    const contenedor = document.getElementById('contenedorCards');
    document.getElementById('title_marvel').style.display = "none";
    console.log(datos);
    let templateHTML = "";

    for (const hero of datos.data.results) {

      if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
        continue;
      } else {
        let urlHero = hero.urls[0].url;
        templateHTML += `
            <div class="card" style="width: 19rem;" >
                <div class="card-title">${hero.title}</div><br/>
                <span class="items">Páginas: ${hero.pageCount}</span><br/>
                <span class="items">Formato: ${hero.format}</span>
                <a href="${urlHero} target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="imagen-comics" />
                </a>
            </div>
          `;
      }
    }

    /**
     * Estilos para el contenedor principal
     */
    contenedor.style.paddingTop = "5rem";
    contenedor.style.borderRadius = ".8rem";
    contenedor.style.background = "#3536367a";
    // Agregar el template literal al contenedor que deseamos mostrar la información
    document.querySelector('#contenedorCards').innerHTML = templateHTML;
  }

  pintarStories(datos) {
    const contenedor = document.getElementById('contenedorCards');
    document.getElementById('title_marvel').style.display = "none";
    console.log(datos);
    let templateHTML = "";

    for (const hero of datos.data.results) {
      let urlHero = hero.series.collectionURI;
      templateHTML += `
          <div class="card" style="width: 19rem;" >
              <div class="card-title">${hero.originalIssue.name}</div><br/>
              <span class="items">Descripción: ${hero.title}</span>
          </div>
        `;
    }

    /**
     * Estilos para el contenedor principal
     */
    contenedor.style.paddingTop = "5rem";
    contenedor.style.borderRadius = ".8rem";
    contenedor.style.background = "#3536367a";
    // Agregar el template literal al contenedor que deseamos mostrar la información
    document.querySelector('#contenedorCards').innerHTML = templateHTML;
  }

  pintarSeries(datos) {
    const contenedor = document.getElementById('contenedorCards');
    console.log(datos);
    let templateHTML = "";

    for (const hero of datos.data.results) {

      if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
        continue;
      } else {
        let urlHero = hero.urls[0].url;
        let url2 = `${hero.characters.collectionURI}?ts=1&apikey=${environment.apikey}`;
        let template2 = "";

        fetch(url2)
          .then(res => {
            return res.json();
          })
          .then(dat => {
            for (const c of dat.data.results) {
              template2 += ` ${c.name},`;

              templateHTML += `
                <div class="card" style="width: 19rem;" >
                    <div class="card-title">${hero.title}</div><br/>
                    <span class="items">Año: ${hero.endYear}</span><br/>
                    <span class="items">Personajes: ${template2}</span><br/>
                    <a href="${urlHero} target="blank">
                      <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="imagen-comics" target="_blank" />
                    </a>
                </div>
              `;

              /**
              * Estilos para el contenedor principal
              */
              contenedor.style.paddingTop = "5rem";
              contenedor.style.borderRadius = ".8rem";
              contenedor.style.background = "#3536367a";
              // Agregar el template literal al contenedor que deseamos mostrar la información
              document.querySelector('#contenedorCards').innerHTML = templateHTML;

            }
          })
          .catch(err => {
            console.log(err);
          })
      }
    }
  }

  pintarCreators(datos) {
    const contenedor = document.getElementById('contenedorCards');
    document.getElementById('title_marvel').style.display = "none";
    console.log(datos);
    let templateHTML = "";

    for (const hero of datos.data.results) {

      if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
        continue;
      } else {
        let urlHero = hero.urls[0].url;
        templateHTML += `
          <div class="card" style="width: 19rem;" >
              <div class="card-title">${hero.firstName}</div><br/>
              <a href="${urlHero} target="blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="imagen-comics" target="_blank" />
              </a>
          </div>
        `;
      }
    }

    /**
     * Estilos para el contenedor principal
     */
    contenedor.style.paddingTop = "5rem";
    contenedor.style.borderRadius = ".8rem";
    contenedor.style.background = "#3536367a";
    // Agregar el template literal al contenedor que deseamos mostrar la información
    document.querySelector('#contenedorCards').innerHTML = templateHTML;
  }

}
