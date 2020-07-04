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


  // Commit 6

  
  // Commit 12


  // Commit 11


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
