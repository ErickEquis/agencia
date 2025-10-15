import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  services = [
    { icon: '🎨', title: 'Diseño Gráfico', desc: 'Identidad visual, branding y diseño editorial' },
    { icon: '💻', title: 'Desarrollo Web', desc: 'Sitios web y aplicaciones a medida' },
    { icon: '📱', title: 'UX/UI Design', desc: 'Experiencias digitales intuitivas' },
    { icon: '📹', title: 'Motion Graphics', desc: 'Animaciones y video marketing' },
    { icon: '📊', title: 'Marketing Digital', desc: 'Estrategias que convierten' },
    { icon: '🚀', title: 'Branding', desc: 'Construimos marcas memorables' }
  ];
}

