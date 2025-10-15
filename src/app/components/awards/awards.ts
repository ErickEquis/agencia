import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [],
  templateUrl: './awards.html',
  styleUrl: './awards.scss'
})
export class AwardsComponent {
  awards = [
    { icon: '🏆', title: 'Awwwards Site of the Day', year: '2024' },
    { icon: '🥇', title: 'CSS Design Awards', year: '2023' },
    { icon: '⭐', title: 'FWA of the Day', year: '2024' },
    { icon: '🎖️', title: 'Webby Awards Nominee', year: '2023' }
  ];
}

