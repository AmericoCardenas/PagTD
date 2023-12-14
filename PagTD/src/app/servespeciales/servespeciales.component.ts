import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-servespeciales',
  templateUrl: './servespeciales.component.html',
  styleUrls: ['./servespeciales.component.css']
})
export class ServespecialesComponent implements OnInit {
  ntitle = 'Viajes Especiales | TD';
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.ntitle);
  }

}
