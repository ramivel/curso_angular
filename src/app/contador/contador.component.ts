import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  /*nombre:string = 'Ramiro Velasco';
  persona:Persona = {
    nombre: 'Ramiro Velasco',
    edad: 35
  }*/

  numero:number = 0;

  incrementar(){
    this.numero++;
  }

  decrementar(){
    this.numero--;
  }

}
