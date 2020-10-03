import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  historial: object[];

  constructor(public servicios: ServiciosService) { }

  ngOnInit(): void {
    this.getHistorial();

  }

  getHistorial() {
    this.servicios.getHistorial().subscribe((data: any) => {
      console.log(data);
      this.historial = data;
    })
  }


}
