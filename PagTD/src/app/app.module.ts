import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { BotonupComponent } from './botonup/botonup.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServtpersonalComponent } from './servtpersonal/servtpersonal.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ServespecialesComponent } from './servespeciales/servespeciales.component';
import { ServrunidadesComponent } from './servrunidades/servrunidades.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { UnetetdComponent } from './unetetd/unetetd.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CotizarComponent } from './cotizar/cotizar.component';
import { BotonwhatsappComponent } from './botonwhatsapp/botonwhatsapp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    BotonupComponent,
    NosotrosComponent,
    ServtpersonalComponent,
    ContactanosComponent,
    ServespecialesComponent,
    ServrunidadesComponent,
    SeguridadComponent,
    TecnologiaComponent,
    UnetetdComponent,
    ContactoComponent,
    CotizarComponent,
    BotonwhatsappComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
