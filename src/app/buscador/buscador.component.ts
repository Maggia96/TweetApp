import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  cadena: string
  tweets = [];
  foto: string;
  text: string;
  constructor(public servicios: ServiciosService) {

    this.tweets = null;
    this.foto = "";
    this.text = "";
    this.cadena = "";
  }
  ngOnInit() {
  }

  getTweets() {

    this.servicios.getTweet(this.cadena).subscribe((data: any) => {
      this.tweets = data.data.tweets.statuses;
      this.foto = data.data.tweets.statuses[0].user.profile_image_url;
      this.text = data.data.tweets.statuses[0].text;


    })
    this.postBusqueda();
  }

  postBusqueda() {
    this.servicios.postBusqueda(this.cadena).subscribe((data: any) => {
      console.log(data, "here");
    });
  }


}
