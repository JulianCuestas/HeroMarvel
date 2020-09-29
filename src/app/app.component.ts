import { Component } from '@angular/core';
import { ServicioAPIService } from './ServicioAPI/servicio-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Cargar el servicio como parámetro del constructor para poder usar
   * sus métodos internos
   * @param datosMarvel 
   */
  constructor(private datosMarvel: ServicioAPIService){}

  title = 'Marvel';
  
  mostrar_menu(){
    document.getElementById('menu_resp').style.display = 'block';
  }

  cerrar_menu(){
    document.getElementById('menu_resp').style.display = 'none';
  }
  
  /**
   * Método para obtener el id del botón presionado en el aside.
   * => Recibe como parámetro un event para saber en donde se disparo el event
   *    y así obtener el Id de los botones
   * @param e 
   */
  botonPresionado (e) {
    document.getElementById('loadingPage').style.display = 'block';
    let item;

    /**
     * Los botones están compuestos por tags <li>
     */
    if(e.target.localName === "li") {
      item = e.target.id;
      console.log(item);
    }

    /**
     * Llamar función obtenerDatosCompletosXItem del servicio DatosAPIService
     * => Recibe como parámetro el item con el id obtenido
     */
    this.datosMarvel.construirUrl(item);
  }

}
