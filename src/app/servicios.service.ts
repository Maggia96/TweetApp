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
    return this.http.get<object[]>("http://127.0.0.1:8000/api/tweets", { params: param });

  }

  getHistorial() {
    return this.http.get<object[]>("http://127.0.0.1:8000/api/busquedas");
  }

  postBusqueda(busqueda) {
    return this.http.post<busqueda>("http://127.0.0.1:8000/api/busquedas", { busqueda });
  }
}
