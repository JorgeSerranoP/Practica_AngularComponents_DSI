import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.scss']
})
export class ComunidadComponent implements OnInit {

  selectedCom: number = 0;
  selectedProv: number = 0;
  hide: boolean = true;

  comunidades = [['Andalucia', 1], ['Aragon', 2], ['Asturias', 3], ['Islas Baleares', 4], ['Islas Canarias', 5], ['Cantabria', 6],
  ['Castilla y Leon', 7], ['Castilla-La Mancha', 8], ['Cataluña', 9], ['Valencia', 10], ['Extremadura', 11], ['Galicia', 12],
  ['Madrid', 13], ['Murcia', 14], ['Navarra', 15], ['Pais Vasco', 16], ['La Rioja', 17], ['Ceuta', 18], ['Melilla', 19]];

  provincias = [[1, 'Almeria', 1], [1, 'Cadiz', 2], [1, 'Cordoba', 3], [1, 'Granada', 4], [1, 'Huelva', 5], [1, 'Jaen', 6], [1, 'Malaga', 7],
  [1, 'Sevilla', 8], [2, 'Huesca', 1], [2, 'Teruel', 2], [2, 'Zaragoza', 3], [3, 'Asturias', 1], [4, 'Baleares', 1], [5, 'Las Palmas', 1],
  [5, 'Santa Cruz de Tenerife', 2], [6, 'Cantabria', 1], [7, 'Avila', 1], [7, 'Burgos', 2], [7, 'Leon', 3], [7, 'Palencia', 4], [7, 'Salamanca', 5],
  [7, 'Segovia', 6], [7, 'Soria', 7], [7, 'Valladolid', 8], [7, 'Zamora', 9], [8, 'Albacete', 1], [8, 'Ciudad Real', 2], [8, 'Cuenca', 3],
  [8, 'Guadalajara', 4], [8, 'Toledo', 5], [9, 'Barcelona', 1], [9, 'Girona', 2], [9, 'Lleida', 3], [9, 'Tarragona', 4], [10, 'Alicante', 1],
  [10, 'Castellon', 2], [10, 'Valencia', 3], [11, 'Badajoz', 1], [11, 'Caceres', 2], [12, 'A Coruña', 1], [12, 'Lugo', 2], [12, 'Ourense', 3],
  [12, 'Pontevedra', 4], [13, 'Madrid', 1], [14, 'Murcia', 1], [15, 'Navarra', 1], [16, 'Alava', 1], [16, 'Vizcaya', 2], [16, 'Gipuzkoa', 3],
  [17, 'La Rioja', 1], [18, 'Ceuta', 1], [19, 'Melilla', 1]];

  ngOnInit() {
  }

  ngAfterInit() {
  }
}