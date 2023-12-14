import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailModule } from '../models/email/email.module';
import { EmailserviceService } from '../services/emailservice.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  emailmod?: EmailModule;

  myform!: FormGroup;
  pat = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  submitted = false;
  file!: File;
  constructor(private emailservice: EmailserviceService) { }

  ngOnInit(): void {

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
    else if (form.value.servicio == undefined) {
      alert("Favor de seleccionar el servicio");
    }
    else if (form.value.estado == undefined) {
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
        to: 'sistemas@transportesdavila.com.mx',
        subject: 'Contacto',
        body:
          '<h1>Contacto</h1>' +
          '<p style="font-size:large">' +
          'Nombre: ' + form.value.nombrecompleto +
          '</p>' +
          '<p style="font-size:large">' +
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
          ' Municipio: ' + form.value.municipio +
          '</p>' +
          '<p style="font-size:large">' +
          ' Comentarios: ' + form.value.comentarios +
          '</p>'
      };

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


  tdmobile() {
    window.open('https://play.google.com/store/apps/details?id=com.bcdos.mobile.td', '_blank')
  }

}
