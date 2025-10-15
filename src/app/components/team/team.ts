import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class TeamComponent {
  team = [
    { name: 'Ana Silva', role: 'Creative Director', initials: 'AS', color: '#FF006E' },
    { name: 'Diego Reyes', role: 'Lead Designer', initials: 'DR', color: '#00F5A0' },
    { name: 'Carmen López', role: 'Art Director', initials: 'CL', color: '#FFC700' }
  ];
}

