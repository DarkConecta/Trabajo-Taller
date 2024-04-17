import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactarComponent {
  private contacts: any[] = [];

  saveContact(contact: any): Promise<any> {
    this.contacts.push(contact);
    return Promise.resolve();
  }
}