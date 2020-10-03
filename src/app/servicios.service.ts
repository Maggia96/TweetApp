import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { busqueda } from './interface/busqueda';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(public http: HttpClient) { }

  getTweet(cadena) {
    const param = new HttpParams()
      .set('cadena', cadena.toString());
    return this.http.get<object[]>("https://boiling-escarpment-03863.herokuapp.com/api/tweets", { params: param });

  }

  getHistorial() {
    return this.http.get<object[]>("https://boiling-escarpment-03863.herokuapp.com/api/busquedas");
  }

  postBusqueda(busqueda) {
    return this.http.post<busqueda>("https://boiling-escarpment-03863.herokuapp.com/api/busquedas", { busqueda });
  }
}
