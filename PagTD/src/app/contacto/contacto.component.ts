import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EmailModule } from '../models/email/email.module';
import { EmailserviceService } from '../services/emailservice.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  ntitle = 'Contacto | TD';
  emailmod?: EmailModule;
  file!: File;
  myform!: FormGroup;
  pat = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  submitted = false;
  constructor(private title: Title, private emailservice: EmailserviceService) {
  }



  ngOnInit(): void {
    this.title.setTitle(this.ntitle);

    this.myform = new FormGroup({
      "nombrecompleto": new FormControl('', Validators.required),
      "correo": new FormControl("", [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      "telefono": new FormControl('', Validators.required),
      "servicio": new FormControl('', Validators.required),
      "estado": new FormControl('', Validators.required),
      "municipio": new FormControl('', Validators.required),
      "comentarios": new FormControl('', Validators.required)

    });

  }

  get nombrecompleto() {
    return this.myform.get('nombrecompleto');
  }
  get correo() {
    return this.myform.get('correo');
  }
  get telefono() {
    return this.myform.get('telefono');
  }
  get servicio() {
    return this.myform.get('servicio');
  }
  get estado() {
    return this.myform.get('estado');
  }
  get municipio() {
    return this.myform.get('municipio');
  }
  get comentarios() {
    return this.myform.get('comentarios');
  }

  SendEmail(form: FormGroup) {
    this.submitted = true;
    if (form.value.nombrecompleto == "") {
      alert("Favor de introducir su nombre completo");
    }
    else if (form.value.correo == "") {
      alert("Favor de introducir su correo electronico");
    }
    else if (form.value.telefono == "") {
      alert("Favor de introducir su telefono");
    }
    else if (form.value.servicio == "") {
      alert("Favor de seleccionar el servicio");
    }
    else if (form.value.estado == "") {
      alert("Favor de seleccionar su estado");
    }
    else if (form.value.municipio == "") {
      alert("Favor de introducir su municipio");
    }
    else if (form.value.comentarios == "") {
      alert("Favor de introducir comentarios");
    }
    else {
      console.log(form.value.nombrecompleto, form.value.correo, form.value.telefono, form.value.servicio, form.value.estado, form.value.municipio)
      this.emailmod = {
        to: 'comercial@transportesdavila.com.mx',
        subject: 'Contacto',
        body:
          '<h1>Contacto</h1>' +
        '<p style="font-size:large">'+
          'Nombre: ' + form.value.nombrecompleto +
        '</p>'+
        '<p style="font-size:large">'+
          ' Correo: ' + form.value.correo +
          '</p>' +
          '<p style="font-size:large">' +
          ' Telefono: ' + form.value.telefono +
          '</p>' +
          '<p style="font-size:large">' +
          ' Servicio: ' + form.value.servicio +
          '</p>' +
          '<p style="font-size:large">' +
          ' Estado: ' + form.value.estado +
          '</p>' +
          '<p style="font-size:large">' +
          ' Municipio: ' + form.value.municipio+
          '</p>' +
          '<p style="font-size:large">' +
          ' Comentarios: ' + form.value.comentarios +
          '</p>'
      };


      console.log(this.emailmod);

     this.emailservice.EnviarEmail(this.emailmod!)
      .subscribe({
        next: res => {
          console.log(res);
          alert("Gracias por contactarnos, en un momento te atenderemos");
           this.myform = new FormGroup({
      "nombrecompleto": new FormControl('', Validators.required),
      "correo": new FormControl("", [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      "telefono": new FormControl('', Validators.required),
      "servicio": new FormControl('', Validators.required),
      "estado": new FormControl('', Validators.required),
      "municipio": new FormControl('', Validators.required),
      "comentarios": new FormControl('', Validators.required)

    });
        },
        error: err => { console.log(err) }
      })
    }








 
  }

}
