import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent implements OnInit {
  ntitle = 'Seguridad | TD';
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.ntitle);
  }

}
