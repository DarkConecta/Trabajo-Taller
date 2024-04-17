import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PublicacionComponent } from './paginas/publicacion/publicacion.component';
import { ContactarComponent } from './paginas/contactar/contactar.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';

export const routes: Routes = [
    {path: "inicio", component: InicioComponent},
    {path: "nosotros", component: NosotrosComponent},
    {path: "contactenos", component: ContactarComponent},
    {path: "publicaciones", component: PublicacionComponent},
    { path: '',   redirectTo: '/inicio', pathMatch: 'prefix' } // redirect to `first-component`
];