import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class PortfolioComponent {
  projects = [
    { title: 'Brand Redesign', client: 'TechCorp', category: 'Branding', color: '#FF006E' },
    { title: 'E-commerce Platform', client: 'ShopNow', category: 'Web Development', color: '#00F5A0' },
    { title: 'Mobile App UI', client: 'FitnessPro', category: 'UX/UI', color: '#FFC700' },
    { title: 'Marketing Campaign', client: 'EcoLife', category: 'Digital Marketing', color: '#A259FF' },
    { title: 'Corporate Identity', client: 'FinanceHub', category: 'Branding', color: '#00D9FF' },
    { title: 'Motion Graphics', client: 'MediaPlus', category: 'Animation', color: '#FF006E' }
  ];
}

