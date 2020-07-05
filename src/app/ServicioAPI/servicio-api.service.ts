import { Injectable } from '@angular/core';
// Importar environment donde se guardo la API KEY por defecto
import { environment } from 'src/environments/environment';
import { NgStyle } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServicioAPIService {

  constructor() { }
  // Commit 5


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
	}))
      .catch((error) => {
        alert(`Hubo errores en la consulta a la API, error: \n${error}`);
      })
  }
  
  pintarStories(datos){
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

  pintarSeries(datos){
    const contenedor = document.getElementById('contenedorCards');
    console.log(datos);
    let templateHTML = "";

    for (const hero of datos.data.results) {
      
      if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
        continue;
      }else {
        let urlHero = hero.urls[0].url;
        let url2 = `${hero.characters.collectionURI}?ts=1&apikey=${environment.apikey}`;
        let template2 = "";

        fetch(url2)
          .then( res => {
            return res.json();
          })
          .then( dat => {
            for (const c of dat.data.results){
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
          .catch( err => {
            console.log(err);
          })
      }
    }
  }
  
  
  // Commit 12


  // Commit 11


  Archivo: servicio-api.services.ts

  pintarCreators(datos){
    const contenedor = document.getElementById('contenedorCards');
    document.getElementById('title_marvel').style.display = "none";
    console.log(datos);
    let templateHTML = "";

    for (const hero of datos.data.results) {
      
      if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
        continue;
      }else {
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


  // Commit 9


  // Commit 8


}
