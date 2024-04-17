import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  saveContact(contacto: any): void {
    // Obtener los contactos guardados anteriormente del almacenamiento local
    let contactosGuardados = (JSON.parse(localStorage.getItem('contactos') as string) || []) as any[];
    
    // Agregar el nuevo contacto al array de contactos
    contactosGuardados.push(contacto);
    
    // Guardar el array actualizado de contactos en el almacenamiento local
    localStorage.setItem('contactos', JSON.stringify(contactosGuardados));
  }

  obtenerContactos(): any[] {
    // Obtener los contactos guardados del almacenamiento local
    return JSON.parse(localStorage.getItem('contactos') as string) || [] as any[];  }
}
