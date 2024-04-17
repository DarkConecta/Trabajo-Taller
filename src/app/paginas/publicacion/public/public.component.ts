import { Component, Input, OnInit } from '@angular/core';
import { Publicar } from '../../../interface/publicar';
import { Usuarios } from '../../../interface/usuarios';

@Component({
  selector: 'app-Trabajo-Taller',
  standalone: true,
  imports: [],
  templateUrl: './public.component.html',
  styleUrl: './public.component.css'
})
export class PublicComponent {
  @Input() Publicar!: Publicar;
  @Input() Usuarios!: Usuarios | undefined;

}