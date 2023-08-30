import { Component } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss'],
})
export class HomeMainComponent {
  dynamicText: string[] = [
    'Compassionate',
    'Respect',
    'Collaborative',
    'Accessible',
    'Birth Justice',
    'Abolition',
  ];
}
