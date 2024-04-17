import { Component, Input, OnInit } from '@angular/core';
import { ConsumirApiService } from '../../servicios/consumir-api.service';
import { Publicar } from '../../interface/publicar';
import { Usuarios } from '../../interface/usuarios';
import { PublicComponent } from "./public/public.component";

@Component({
  selector: 'app-publicacion',
  standalone: true,
  templateUrl: './publicacion.component.html',
  styleUrl: './publicacion.component.css',
  imports: [PublicComponent]
})
export class PublicacionComponent implements OnInit {  // Implementacion de interfaz OnInit

  // Esta línea declara una propiedad pública llamada publicaciones que es un arreglo vacío de tipo Publicacion
  public Publicar: Publicar[] = [];
  public usuarios: Usuarios[] = [];
  textoBuscado: string = "";

  // Este constructor de la clase inyecta el servicio ConsumoApiService y lo almacena en una propiedad privada llamada consumoApiService
  constructor(private consumirApiService: ConsumirApiService) { }

  // Este es un método obligatorio de la interfaz OnInit que se llama automáticamente cuando se inicializa el componente
  ngOnInit(): void {
    // Dentro de ngOnInit se llama al método getPublicaciones para obtener los datos al iniciar el componente
    this.getPublicaciones();
    this.getUsuarios();
  }

  getPublicaciones(): void {
    this.consumirApiService.getData("posts")  // Se llama al método getData del servicio ConsumoApiService
      .subscribe({  // El método getData devuelve un Observable, por lo que se utiliza subscribe para manejar la respuesta
        next: (res) => {
          // Se actualizan las publicaciones almacenando la respuesta (res) en la propiedad publicaciones
          this.Publicar = res;
        },
        error: (err) => {
          // La función error se ejecuta si ocurre un error al obtener los datos (err)
          console.log(err);
        }
      });
  }

  getUsuarios(): void {
    this.consumirApiService.getData(`users`)  // Se llama al método getData del servicio ConsumoApiService
      .subscribe({  // El método getData devuelve un Observable, por lo que se utiliza subscribe para manejar la respuesta
        next: (res) => {
          // Se actualizan los usuarios almacenando la respuesta (res) en la propiedad publicaciones
          this.usuarios = res;
        },
        error: (err) => {
          // La función error se ejecuta si ocurre un error al obtener los datos (err)
          console.log(err);
        }
      });
  }

  getUsuarioPorId(userId: number): Usuarios | undefined {
    return this.usuarios.find((user) => user.id === userId);
  }

  buscarTexto(input: HTMLInputElement) {
    this.textoBuscado = input.value.toLowerCase();
    console.log(this.textoBuscado);
  }

}