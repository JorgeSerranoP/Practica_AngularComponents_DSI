import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-propiedades',
    templateUrl: './propiedades.component.html',
    styleUrls: ['./propiedades.component.scss']
})
export class PropiedadesComponent implements OnInit {

    @Input() selectedCom: string = "";
    @Input() selectedProv: string = "";

    ngOnInit() {
    }

    ngAfterInit() {
    }
}