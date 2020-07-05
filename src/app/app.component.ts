import { Component } from '@angular/core';
import { ServicioAPIService } from './ServicioAPI/servicio-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Commit 13
  constructor(){}

  title = 'Marvel';
  
  mostrar_menu(){
    document.getElementById('menu_resp').style.display = 'block';
  }

  cerrar_menu(){
    document.getElementById('menu_resp').style.display = 'none';
  }
  
  
  // Commit 17

}

/**
   * Cargar el servicio como parámetro del constructor para poder usar
   * sus métodos internos
   * @param datosMarvel 
   */
  constructor(private datosMarvel: ServicioAPIService){}
