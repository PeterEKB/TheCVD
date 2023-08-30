import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
} from '@angular/core';
import { DoulasService } from '../../services/doulas.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { DoulaInfo } from 'src/app/core/models/doula-info';
import { Progress } from 'src/app/shared/components/progress-bar/progress-bar.component';

export interface User {
  id: number;
  name: UserName;
  email: string;
  phone: string;
}
export interface UserName {
  first: string;
  last: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  users: User[] = [
    {
      id: 1,
      name: {
        first: 'John',
        last: 'Doe',
      },
      email: 'XXXXXXXXXXXX',
      phone: 'XXXXXXXXXXXX',
    },
    {
      id: 2,
      name: {
        first: 'Jane',
        last: 'Doe',
      },
      email: 'XXXXXXXXXXXX',
      phone: 'XXXXXXXXXXXX',
    }
  ]
  @ViewChild('slider')
  private slider!: ElementRef;
  @ViewChild('sliderContainer')
  private sliderContainer!: ElementRef;

  private params!: Params;
  private slideWidth!: number;

  public agreed: boolean = false;
  public doulaInfo!: DoulaInfo;
  public slidePosition: number = 1;
  public progressBar: Progress = {};

  constructor(
    private readonly s_doulas: DoulasService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params
      .pipe(take(1))
      .subscribe((val) => (this.params = { ...val }));

    const doulaInfo = s_doulas.getByID(this.params['doula']);

    if (!doulaInfo) router.navigate(['/doulas']);
    else this.doulaInfo = doulaInfo;

    console.log(this.doulaInfo);
  }
  ngAfterViewInit(): void {
    this.setSliderWidth();
    this.setSlidePosition(this.slidePosition);
    this.updateProgressBar()
  }
  @HostListener('window:resize')
  setSliderWidth() {
    this.slideWidth = this.sliderContainer.nativeElement.offsetWidth;
    this.slider.nativeElement
      .querySelectorAll('.slide')
      .forEach((element: HTMLElement) => {
        element.style.width = this.slideWidth + 'px';
      });
  }
  updateProgressBar() {
    this.progressBar = {
      pos: this.slidePosition,
      max: this.slider.nativeElement.childElementCount,
    }
  }
  setSlidePosition(position: number) {
    this.slidePosition = position;
    this.slider.nativeElement.style.transform = `translateX(-${
      this.slideWidth * (position - 1)
    }px)`;
  }
  prevSlide() {
    if (this.slidePosition > 1) this.setSlidePosition(this.slidePosition - 1);
    this.updateProgressBar()
  }
  nextSlide() {
    if (this.slidePosition < this.slider.nativeElement.childElementCount)
      this.setSlidePosition(this.slidePosition + 1);
      this.updateProgressBar()
  }
  toggleAgree(){
    this.agreed = !this.agreed
  }
}
