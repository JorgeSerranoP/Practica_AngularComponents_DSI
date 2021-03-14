import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.scss']
})
export class ComunidadComponent implements OnInit {

  @Input() public nombre: string;

  comunidades = [['Andalucia', 1], ['Aragon', 2], ['Asturias', 3], ['Islas Baleares', 4], ['Islas Canarias', 5], ['Cantabria', 6],
  ['Castilla y Leon', 7], ['Castilla-La Mancha', 8], ['Cataluña', 9], ['Valencia', 10], ['Extremadura', 11], ['Galicia', 12],
  ['Madrid', 13], ['Murcia', 14], ['Navarra', 15], ['Pais Vasco', 16], ['La Rioja', 17], ['Ceuta', 18], ['Melilla', 19]];

  //Permite hacer algo cuando se da valor a una propiedad:
  @Input() public set nombre2(nombre: string) {
    this.nombre = nombre;
  }

  constructor() {
    this.nombre = "";
  }

  ngOnInit() {
    console.log(this.comunidades[0][1]);
  }

}