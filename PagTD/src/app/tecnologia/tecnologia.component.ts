import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {
  ntitle='Tecnologia | TD'
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.ntitle);
  }

}
