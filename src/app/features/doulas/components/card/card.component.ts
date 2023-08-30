import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CardConfig } from 'src/app/core/models/card-config';
import { DoulaInfo } from 'src/app/core/models/doula-info';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  public ellipsis: boolean = false;
  public hover: boolean = false;
  private _config: CardConfig = {
    expand: false,
  };

  @Input() set config(config: CardConfig) {
    if (config.expand) {
      if (config.expand === this._config.expand) {
        return;
      }
      this._config = {...config};
    }
  }
  @Input() data: DoulaInfo = {
    id: '00000',
    pronoun: 'She/Her',
    name: {
      first: 'Jane',
      last: 'Doe',
    },
    email: 'jane.doe@example.com',
    withCVD: 'jan 2023',
    moreInfo: 'XXXXXXXX XXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXX',
    currentProgram: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    website: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    facebook: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    locations: ['central', 'north', 'south'],
  };

  @ViewChild('locations') locationsOuter!: ElementRef;
  @ViewChild('locationsList') locationsInner!: ElementRef;
  @ViewChild('details') parentSize!: ElementRef;
  @ViewChild('mainDetails') childSize!: ElementRef;
  @ViewChild('extra') extra!: ElementRef;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (
      this.locationsInner.nativeElement.offsetHeight >
      this.locationsOuter.nativeElement.offsetHeight
    ) {
      this.ellipsis = true;
    }
    this.cdRef.detectChanges();
    this._config.expand? this.expand() : this.collapse();
  }
  collapse() {
    this.parentSize.nativeElement.style.height =
      this.childSize.nativeElement.offsetHeight + 'px';
  }
  expand() {
    this.parentSize.nativeElement.style.height =
      this.childSize.nativeElement.offsetHeight +
      this.extra.nativeElement.offsetHeight +
      'px';
  }
  toggle(event: Event){
    event.preventDefault()
    event.stopPropagation()

    this._config.expand = !this._config.expand

    this._config.expand? this.expand(): this.collapse()
  }
}
