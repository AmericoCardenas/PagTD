import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botonwhatsapp',
  templateUrl: './botonwhatsapp.component.html',
  styleUrls: ['./botonwhatsapp.component.css']
})
export class BotonwhatsappComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  AbrirWhatsapp() {
    window.open("https://wa.me/+524772136060", "_blank");
  }

}
