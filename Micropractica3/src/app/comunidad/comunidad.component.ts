import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.scss']
})
export class ComunidadComponent implements OnInit {

  comunidades = [['Andalucia', 1], ['Aragon', 2], ['Asturias', 3], ['Islas Baleares', 4], ['Islas Canarias', 5], ['Cantabria', 6],
  ['Castilla y Leon', 7], ['Castilla-La Mancha', 8], ['Cataluña', 9], ['Valencia', 10], ['Extremadura', 11], ['Galicia', 12],
  ['Madrid', 13], ['Murcia', 14], ['Navarra', 15], ['Pais Vasco', 16], ['La Rioja', 17], ['Ceuta', 18], ['Melilla', 19]];

  ngOnInit() {
  }

}