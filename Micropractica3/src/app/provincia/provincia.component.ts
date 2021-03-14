import { Component, OnInit, Input, QueryList, ContentChildren } from '@angular/core';

import { ComunidadComponent } from '../comunidad/comunidad.component';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.scss']
})
export class ProvinciaComponent implements OnInit {

  @Input() public nombre: string;

  @ContentChildren(ComunidadComponent) public comunidades!: QueryList<ComunidadComponent>;

  provincias = [[1, 'Almeria', 1], [1, 'Cadiz', 2], [1, 'Cordoba', 3], [1, 'Granada', 4], [1, 'Huelva', 5], [1, 'Jaen', 6], [1, 'Malaga', 7],
  [1, 'Sevilla', 8], [2, 'Huesca', 1], [2, 'Teruel', 2], [2, 'Zaragoza', 3], [3, 'Asturias', 1], [4, 'Baleares', 1], [5, 'Las Palmas', 1],
  [5, 'santa Cruz de Tenerife', 2], [6, 'Cantabria', 1], [7, 'Avila', 1], [7, 'Burgos', 2], [7, 'Leon', 3], [7, 'Palencia', 4], [7, 'Salamanca', 5],
  [7, 'Segovia', 6], [7, 'Soria', 7], [7, 'Valladolid', 8], [7, 'Zamora', 9], [8, 'Albacete', 1], [8, 'Ciudad Real', 2], [8, 'Cuenca', 3],
  [8, 'Guadalajara', 4], [8, 'Toledo', 5], [9, 'Barcelona', 1], [9, 'Girona', 2], [9, 'Lleida', 3], [9, 'Tarragona', 4], [10, 'Alicante', 1],
  [10, 'Castellon', 2], [10, 'Valencia', 3], [11, 'Badajoz', 1], [11, 'Caceres', 2], [12, 'A Coruña', 1], [12, 'Lugo', 2], [12, 'Ourense', 3],
  [12, 'Pontevedra', 4], [13, 'Madrid', 1], [14, 'Murcia', 1], [15, 'Navarra', 1], [16, 'Alava', 1], [16, 'Vizcaya', 2], [16, 'Gipuzkoa', 3],
  [17, 'La Rioja', 1], [18, 'Ceuta', 1], [19, 'Melilla', 1]];

  //Permite hacer algo cuando se da valor a una propiedad:
  @Input() public set nombre2(nombre: string) {
    this.nombre = nombre;
  }
  constructor() {
    this.nombre = "";
  }

  ngOnInit() {
    console.log(this.provincias[0][0]);

  }

}