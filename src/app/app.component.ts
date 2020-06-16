import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvel';
  
  mostrar_menu(){
    document.getElementById('menu_resp').style.display = 'block';
  }

  cerrar_menu(){
    document.getElementById('menu_resp').style.display = 'none';
  }
}
