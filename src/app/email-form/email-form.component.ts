import { Component } from '@angular/core';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';



@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {
 public sendEmail(e:Event){
  e.preventDefault();
  emailjs.sendForm('service_t6g5h4v', 'template_fw0w5ci', e.target as HTMLFormElement, '-YFTp1Qf7F0yGEQXd')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
 }

 sendnotify(){
  alert( "Su correo se envio exitosamente");
  setInterval(() => {
    window.location.reload();
  },1000)
  
 }
}


