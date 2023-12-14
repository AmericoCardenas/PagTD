import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EmailModule } from '../models/email/email.module';
import { EmailserviceService } from '../services/emailservice.service';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.css']
})
export class CotizarComponent implements OnInit {
  ntitle = 'Cotizar | TD';
  emailmod?: EmailModule;
  file!: File;
  myform!: FormGroup;
  pat = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  submitted = false;
  constructor(private title: Title, private emailservice: EmailserviceService) { }

  ngOnInit(): void {
    this.title.setTitle(this.ntitle);

    this.myform = new FormGroup({
      "nombrecompleto": new FormControl('', Validators.required),
      "cantidadpersonas": new FormControl('', Validators.required),
      "fechasalida": new FormControl('', Validators.required),
      "telefono": new FormControl('', Validators.required),
      "servicio": new FormControl('', Validators.required),
      "fecharegreso": new FormControl('', Validators.required),
      "calleorigen": new FormControl('', Validators.required),
      "numorigen": new FormControl('', Validators.required),
      "coloniaorigen": new FormControl('', Validators.required),
      "reforigen": new FormControl('', Validators.required),
      "estadoorigen": new FormControl('', Validators.required),
      "municipioorigen": new FormControl('', Validators.required),
      "calledestino": new FormControl('', Validators.required),
      "numdestino": new FormControl('', Validators.required),
      "coloniadestino": new FormControl('', Validators.required),
      "refdestino": new FormControl('', Validators.required),
      "estadodestino": new FormControl('', Validators.required),
      "municipiodestino": new FormControl('', Validators.required)
    });
  }

  get nombrecompleto() {
    return this.myform.get('nombrecompleto');
  }
  get correo() {
    return this.myform.get('correo');
  }
  get cantidadpersonas() {
    return this.myform.get('cantidadpersonas');
  }
  get telefono() {
    return this.myform.get('telefono');
  }
  get servicio() {
    return this.myform.get('servicio');
  }
  get fechasalida() {
    return this.myform.get('fechasalida');
  }
  get fecharegreso() {
    return this.myform.get('fecharegreso');
  }

  get calleorigen() {
    return this.myform.get('calleorigen');
  }
  get coloniaorigen() {
    return this.myform.get('coloniaorigen');
  }
  get numorigen() {
    return this.myform.get('numorigen');
  }
  get reforigen() {
    return this.myform.get('reforigen');
  }
  get estadoorigen() {
    return this.myform.get('estadoorigen');
  }
  get municipioorigen() {
    return this.myform.get('municipioorigen');
  }

  get calledestino() {
    return this.myform.get('calledestino');
  }
  get coloniadestino() {
    return this.myform.get('coloniadestino');
  }
  get numdestino() {
    return this.myform.get('numdestino');
  }
  get refdestino() {
    return this.myform.get('refdestino');
  }
  get estadodestino() {
    return this.myform.get('estadodestino');
  }
  get municipiodestino() {
    return this.myform.get('municipiodestino');
  }

  SendEmail(form: FormGroup) {
    this.submitted = true;
    if (form.value.nombrecompleto == "") {
      alert("Favor de introducir su nombre completo");
    }
    else if (form.value.telefono == "") {
      alert("Favor de introducir su telefono");
    }
    else if (form.value.cantidadpersonas == "" || form.value.cantidadpersonas == undefined) {
      alert("Favor de introducir la cantidad de personas");
    }
    else if (form.value.fechasalida == "" || form.value.fechasalida == undefined) {
      alert("Favor de introducir la fecha de salida");
    }
    else if (form.value.fecharegreso == "" || form.value.fecharegreso == undefined) {
      alert("Favor de introducir la fecha de regreso");
    }
    else if (form.value.servicio == "") {
      alert("Favor de seleccionar el servicio");
    }
    else if (form.value.calleorigen == "") {
      alert("Favor de seleccionar el calleorigen");
    }
    else if (form.value.coloniaorigen == "") {
      alert("Favor de seleccionar el coloniaorigen");
    }
    else if (form.value.numorigen == "") {
      alert("Favor de seleccionar el numorigen");
    }
    else if (form.value.reforigen == "") {
      alert("Favor de seleccionar el reforigen");
    }
    else if (form.value.estadoorigen == "") {
      alert("Favor de seleccionar su estadoorigen");
    }
    else if (form.value.municipioorigen == "") {
      alert("Favor de introducir su municipioorigen");
    }
    else if (form.value.calledestino == "") {
      alert("Favor de seleccionar el calledestino");
    }
    else if (form.value.coloniadestino == "") {
      alert("Favor de seleccionar el coloniadestino");
    }
    else if (form.value.numdestino == "") {
      alert("Favor de seleccionar el numdestino");
    }
    else if (form.value.refdestino == "") {
      alert("Favor de seleccionar el refdestino");
    }
    else if (form.value.estadodestino == "") {
      alert("Favor de seleccionar su estadodestino");
    }
    else if (form.value.municipiodestino == "") {
      alert("Favor de introducir su municipiodestino");
    }
    else {
      this.emailmod = {
        to: 'comercial@transportesdavila.com.mx',
        subject: 'Cotización',
        body:
          '<h1>Cotización</h1>' +
          '<p>________________________________________________________</p>' +
          '<p style="font-size:large">' +
          'Nombre: ' + form.value.nombrecompleto +
          '</p>' +
          '<p style="font-size:large">' +
          ' Telefono: ' + form.value.telefono +
          '</p>' +
          '<p style="font-size:large">' +
          ' Cantidad de Personas: ' + form.value.cantidadpersonas +
          '</p>' +
          '<p style="font-size:large">' +
          ' Fecha de salida: ' + form.value.fechasalida +
          '</p>' +
          '<p style="font-size:large">' +
          ' Fecha de regreso: ' + form.value.fecharegreso +
          '</p>' +
          '<p style="font-size:large">' +
          ' Servicio: ' + form.value.servicio +
          '</p>' +
          '<p>___________________________________________________________________</p>' +
          '<p style="font-size:large">' +
          ' Origen ' +
          '</p>' +
          '<p style="font-size:large">' +
          ' Calle: ' + form.value.calleorigen +
          '</p>' +
          '<p style="font-size:large">' +
          ' Número: ' + form.value.numorigen +
          '</p>' +
          '<p style="font-size:large">' +
          ' Colonia: ' + form.value.coloniaorigen +
          '</p>' +
          '<p style="font-size:large">' +
          ' Referencia: ' + form.value.reforigen +
          '</p>' +
          '<p style="font-size:large">' +
          ' Estado: ' + form.value.estadoorigen +
          '</p>' +
          '<p style="font-size:large">' +
          ' Municipio: ' + form.value.municipioorigen +
          '</p>' +
          '<p>________________________________________________________________________</p>' +
          '<p style="font-size:large">' +
          ' Destino ' +
          '</p>' +
          '<p style="font-size:large">' +
          ' Calle: ' + form.value.calledestino +
          '</p>' +
          '<p style="font-size:large">' +
          ' Número: ' + form.value.numdestino +
          '</p>' +
          '<p style="font-size:large">' +
          ' Colonia: ' + form.value.coloniadestino +
          '</p>' +
          '<p style="font-size:large">' +
          ' Referencia: ' + form.value.refdestino +
          '</p>' +
          '<p style="font-size:large">' +
          ' Estado: ' + form.value.estadodestino +
          '</p>' +
          '<p style="font-size:large">' +
          ' Municipio: ' + form.value.municipiodestino +
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
              "cantidadpersonas": new FormControl('', Validators.required),
              "fechasalida": new FormControl('', Validators.required),
              "telefono": new FormControl('', Validators.required),
              "servicio": new FormControl('', Validators.required),
              "fecharegreso": new FormControl('', Validators.required),
              "calleorigen": new FormControl('', Validators.required),
              "numorigen": new FormControl('', Validators.required),
              "coloniaorigen": new FormControl('', Validators.required),
              "reforigen": new FormControl('', Validators.required),
              "estadoorigen": new FormControl('', Validators.required),
              "municipioorigen": new FormControl('', Validators.required),
              "calledestino": new FormControl('', Validators.required),
              "numdestino": new FormControl('', Validators.required),
              "coloniadestino": new FormControl('', Validators.required),
              "refdestino": new FormControl('', Validators.required),
              "estadodestino": new FormControl('', Validators.required),
              "municipiodestino": new FormControl('', Validators.required)

            });
          },
          error: err => { console.log(err) }
        })
    }









  }



}
