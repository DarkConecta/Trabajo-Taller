import { Component, Input, OnInit } from '@angular/core';
import { publicar } from '../../../interface/publicar';
import { usuario } from '../../../interface/usuario';

@Component({
  selector: 'app-publica',
  standalone: true,
  imports: [],
  templateUrl: './publica.component.html',
  styleUrl: './publica.component.css'
})

export class PublicaComponent {
  @Input() publicar!: publicar;
  @Input() usuario!: usuario | undefined;

}