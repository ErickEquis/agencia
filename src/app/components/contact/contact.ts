import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    project: '',
    message: ''
  };

  onSubmit() {
    console.log('Proyecto enviado:', this.formData);
    alert('¡Gracias! Te contactaremos pronto para discutir tu proyecto.');
    this.formData = { name: '', email: '', project: '', message: '' };
  }
}

