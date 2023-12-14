import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-servtpersonal',
  templateUrl: './servtpersonal.component.html',
  styleUrls: ['./servtpersonal.component.css']
})
export class ServtpersonalComponent implements OnInit {
  ntitle='Transporte de Personal | TD'
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.ntitle);
  }



}
