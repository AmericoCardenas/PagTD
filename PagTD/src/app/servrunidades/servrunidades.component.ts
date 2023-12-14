import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-servrunidades',
  templateUrl: './servrunidades.component.html',
  styleUrls: ['./servrunidades.component.css']
})
export class ServrunidadesComponent implements OnInit {
  ntitle = 'Renta de Unidades | TD';
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.ntitle);
  }

}
