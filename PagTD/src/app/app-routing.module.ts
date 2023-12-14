import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServtpersonalComponent } from './servtpersonal/servtpersonal.component';
import { ServespecialesComponent } from './servespeciales/servespeciales.component';
import { ServrunidadesComponent } from './servrunidades/servrunidades.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { UnetetdComponent } from './unetetd/unetetd.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CotizarComponent } from './cotizar/cotizar.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'tpersonal', component: ServtpersonalComponent },
  { path: 'vespeciales', component: ServespecialesComponent },
  { path: 'rentaunidades', component: ServrunidadesComponent },
  { path: 'seguridad', component: SeguridadComponent },
  { path: 'tecnologia', component: TecnologiaComponent },
  { path: 'unetetd', component: UnetetdComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'cotizar', component: CotizarComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: "top", useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
