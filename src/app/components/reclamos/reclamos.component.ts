import { Component } from '@angular/core';
import { MessageService } from './../../services/message.service';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.css'],
})
export class ReclamosComponent {
  constructor(public _MessageService: MessageService) {}

  contactForm(form: any) {
    this._MessageService.sendMessage(form).subscribe(() =>{
      alert('Correo enviado correct');
    })
  }
}
