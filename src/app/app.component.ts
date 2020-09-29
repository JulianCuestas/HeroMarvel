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
  constructor(private datosMarvel: ServicioAPIService){
  }

  ngOnInit() {
    this.inicio();
  }

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
  inicio () {
    const templateHTML = `
    <!-- CSS only -->
 <div class="col-sm-1 col-md-1 col-xl-2"></div>
    <div class="col-sm-10 col-md-10 col-xl-8">
      <div class="card container-cards">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-xl-6">
          <h5 class="card-title">Historia</h5>
            <div class="card">
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">Marvel</h6>
                <p class="card-text text-justify">Marvel Cómics es una editorial norteamericana de cómics. Es conocida popularmente como "La casa de las ideas" por la creación de numerosos personajes emblemáticos del género de superhéroes. Algunos de sus cómics más conocidos son Los 4 Fantásticos, Spider-Man, Daredevil, Capitán América, Los Vengadores, Iron Man, Hulk, Wolverine y los X-Men. Desde los años 60 la compañía constituye una de las mayores editoriales de este género. Localizada en Nueva York, fue fundada en el 387 de Park Avenue South, teniendo sus oficinas en la actualidad en el 40th East 10th Avenue.</p>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-sm-12 col-xl-6">
            <h5 class="card-title">Noticias</h5>
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="./assets/Imagenes/blackwidow.jpg" class="card-img" alt="Viuda Negra">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Black Widow</h5>
                    <p class="card-text text-justify">Al nacer, la Viuda Negra, también conocida como Natasha Romanova, se entrega a la KGB para convertirse en su agente definitivo. Cuando la URSS se separa, el gobierno intenta matarla mientras la acción se traslada a la actual Nueva York.</p>
                    <p><b>Fecha de estreno:</b> 28 de Octubre 2020</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-1 col-md-1 col-xl-2"></div>
    `;
    document.querySelector('#contenedorCards').innerHTML = templateHTML;
  }
}
