import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EmailModule } from '../models/email/email.module';
import { EmailserviceService } from '../services/emailservice.service';

@Component({
  selector: 'app-unetetd',
  templateUrl: './unetetd.component.html',
  styleUrls: ['./unetetd.component.css']
})
export class UnetetdComponent implements OnInit {
  ntitle = 'Unete | TD';
  pat = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  emailmod?: EmailModule;
  formAdmin!: FormGroup;
  formOperador!: FormGroup;
  submitted = false;
  file!: File;

  constructor(private title: Title, private emailservice: EmailserviceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.title.setTitle(this.ntitle);

    this.formAdmin = new FormGroup({
      "nombrecompleto": new FormControl('', Validators.required),
      "telefono": new FormControl('', Validators.required),
      "email": new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      "puesto": new FormControl('', Validators.required),
      "vacante": new FormControl('', Validators.required),
      "otro": new FormControl('', Validators.required),
      "cv": new FormControl('', Validators.required)
    });

    this.formOperador = new FormGroup({
      "nombreop": new FormControl('', Validators.required),
      "telefonoop": new FormControl('', Validators.required),
      "emailop": new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      "num1": new FormControl('', Validators.required),
      "num2": new FormControl('', Validators.required),
      "exp": new FormControl('', Validators.required),
      "licencia": new FormControl('', Validators.required),
    });
  }

  get nombreop() {
    return this.formAdmin.get('nombreop');
  }
  get telefonoop() {
    return this.formAdmin.get('telefonoop');
  }
  get emailop() {
    return this.formAdmin.get('emailop');
  }
  get num1() {
    return this.formAdmin.get('num1');
  }
  get num2() {
    return this.formAdmin.get('num2');
  }
  get exp() {
    return this.formAdmin.get('exp');
  }
  get licencia() {
    return this.formAdmin.get('licencia');
  }

  get nombrecompleto() {
    return this.formAdmin.get('nombrecompleto');
  }
  get telefono() {
    return this.formAdmin.get('telefono');
  }
  get email() {
    return this.formAdmin.get('email');
  }
  get puesto() {
    return this.formAdmin.get('puesto');
  }
  get vacante() {
    return this.formAdmin.get('vacante');
  }
  get otro() {
    return this.formAdmin.get('otro');
  }
  get cv() {
    return this.formAdmin.get('cv');
  }

  onFileSelected(event:any) {

    this.file = event.target.files[0];
  }

  SendEmailAdmin(form: FormGroup) {
    this.submitted = true;
    if (form.value.nombrecompleto == "") {
      alert("Favor de introducir su nombre completo");
    }
    else if (form.value.telefono == "") {
      alert("Favor de introducir su telefono");
    }
    else if (form.value.email == "") {
      alert("Favor de introducir tu email");
    }
    else if (form.value.puesto == "") {
      alert("Favor de seleccionar el puesto");
    }
    else if (form.value.vacante == "") {
      alert("Favor de introducir el area");
    }
    else if (form.value.cv == "") {
      alert("Favor de seleccionar tu CV");
    }
    else {

      this.emailmod = {
        to: 'rh@transportesdavila.com.mx',
        subject: 'Vacante Administrativo',
        body:
          '<h1>Vacante Administrativo</h1>' +
          '<p>________________________________________________________</p>' +
          '<p style="font-size:large">' +
          'Nombre: ' + form.value.nombrecompleto +
          '</p>' +
          '<p style="font-size:large">' +
          ' Telefono: ' + form.value.telefono +
          '</p>' +
          '<p style="font-size:large">' +
          ' Email: ' + form.value.email +
          '</p>' +
          '<p style="font-size:large">' +
          ' Puesto: ' + form.value.puesto +
          '</p>' +
          '<p style="font-size:large">' +
          ' Vacante: ' + form.value.vacante +
          '</p>' +
          '<p style="font-size:large">' +
          ' Otro: ' + form.value.otro +
          '</p>'
      };

      this.emailservice.EnviarEmailArchivo(this.emailmod!,this.file)
        .subscribe({
          next: res => {
            console.log(res);
            alert("Gracias por contactarnos");
            this.formAdmin = new FormGroup({
              "nombrecompleto": new FormControl('', Validators.required),
              "telefono": new FormControl('', Validators.required),
              "email": new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
              "puesto": new FormControl('', Validators.required),
              "vacante": new FormControl('', Validators.required),
              "otro": new FormControl('', Validators.required),
              "cv": new FormControl('', Validators.required)
            });

       },
          error: err => { console.log(err) }
        })
    }

  }




  SendEmailOperador(form: FormGroup) {
    this.submitted = true;
    if (form.value.nombreop == "") {
      alert("Favor de introducir su nombre completo");
    }
    else if (form.value.telefonoop == "") {
      alert("Favor de introducir su telefono");
    }
    else if (form.value.emailop == "") {
      alert("Favor de introducir tu email");
    }
    else if (form.value.num1 == "") {
      alert("Favor de introducir el número");
    }
    else if (form.value.num2 == "") {
      alert("Favor de introducir el número");
    }
    else if (form.value.exp == "") {
      alert("Favor de introducir los años de experiencia");
    }
    else if (form.value.licencia == "") {
      alert("Favor de seleccionar tipo de licencia");
    }
    else {
      this.emailmod = {
        to: 'rh@transportesdavila.com.mx',
        subject: 'Vacante Operador',
        body:
          '<h1>Vacante Operador</h1>' +
          '<p>________________________________________________________</p>' +
          '<p style="font-size:large">' +
          'Nombre: ' + form.value.nombreop +
          '</p>' +
          '<p style="font-size:large">' +
          ' Telefono: ' + form.value.telefonoop +
          '</p>' +
          '<p style="font-size:large">' +
          ' Email: ' + form.value.emailop +
          '</p>' +
          '<p style="font-size:large">' +
          ' Numero de Contacto #1: ' + form.value.num1 +
          '</p>' +
          '<p style="font-size:large">' +
          ' Numero de Contacto #2: ' + form.value.num2 +
          '</p>' +
          '<p style="font-size:large">' +
          ' Experiencia: ' + form.value.exp + ' años'+
          '</p>' +
          '<p style="font-size:large">' +
          ' Licencia: ' + form.value.licencia +
          '</p>'
      };

      this.emailservice.EnviarEmail(this.emailmod!)
        .subscribe({
          next: res => {
            console.log(res);
            alert("Gracias por contactarnos");
            this.formOperador = new FormGroup({
              "nombreop": new FormControl('', Validators.required),
              "telefonoop": new FormControl('', Validators.required),
              "emailop": new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
              "num1": new FormControl('', Validators.required),
              "num2": new FormControl('', Validators.required),
              "exp": new FormControl('', Validators.required),
              "licencia": new FormControl('', Validators.required),
            });

          },
          error: err => { console.log(err) }
        })
    }









  }

}
