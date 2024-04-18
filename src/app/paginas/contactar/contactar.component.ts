import { Component } from '@angular/core';

@Component({
  selector: 'app-contactar',
  standalone: true,
  imports: [],
  templateUrl: './contactar.component.html',
  styleUrl: './contactar.component.css'
})

export class ContactarComponent {
  private contacts: any[] = [];

  saveContact(contact: any): Promise<any> {
    this.contacts.push(contact);
    return Promise.resolve();
  }
}