import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
//import { ContactarComponent } from './paginas/contactar/contactar.component';
//import { PublicacionComponent } from './paginas/publicacion/publicacion.component';
//import { PublicComponent } from './paginas/publicacion/public/public.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    //ContactarComponent,
    //PublicacionComponent,
    //PublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
