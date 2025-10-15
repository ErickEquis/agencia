import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [],
  templateUrl: './process.html',
  styleUrl: './process.scss'
})
export class ProcessComponent {
  steps = [
    { number: '01', title: 'Descubrir', desc: 'Entendemos tu visión y objetivos' },
    { number: '02', title: 'Diseñar', desc: 'Creamos conceptos innovadores' },
    { number: '03', title: 'Desarrollar', desc: 'Construimos con excelencia' },
    { number: '04', title: 'Entregar', desc: 'Lanzamos y optimizamos' }
  ];
}

