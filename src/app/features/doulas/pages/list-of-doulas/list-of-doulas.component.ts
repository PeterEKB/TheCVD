import { Component } from '@angular/core';
import { DoulaInfo } from 'src/app/core/models/doula-info';
import { DoulasService } from '../../services/doulas.service';

@Component({
  selector: 'app-list-of-doulas',
  templateUrl: './list-of-doulas.component.html',
  styleUrls: ['./list-of-doulas.component.scss'],
})
export class ListOfDoulasComponent {
  locations: string[] = [
    'central',
    'north side',
    'northwest side',
    'west side',
  ];
  showCard: any = {};
  showAllActive!: boolean;
  listOfDoulas!: DoulaInfo[];
  
  constructor(private readonly s_doulas: DoulasService){
    this.listOfDoulas = this.s_doulas.list;
  }

  ngOnInit() {
    this.showAllCards();
  }

  checkCardVisibility(id: string) {
    return this.listOfDoulas
      .find((doula) => doula.id === id)
      ?.locations.find((location) => this.showCard[location]);
  }
  handleCardVisibility(card: string) {
    switch (card.toLowerCase()) {
      case 'all':
        this.showAllCards();
        break;

      default:
        this.showCard[card] = !this.showCard[card];
        if (!this.showCardArray) this.showAllActive = false;
        else if (this.showCardArray.length === this.locations.length)
          this.showAllActive = true;
        else this.showAllActive = false;
        break;
    }
  }
  showAllCards() {
    this.showCard = {};
    this.showAllActive = !this.showAllActive;
    if (this.showAllActive)
      this.locations.forEach((location) => {
        this.showCard[location] = true;
      });
    else this.showCard = {};
  }
  get showCardArray() {
    return Object.keys(this.showCard).filter((key) => this.showCard[key]);
  }
}
