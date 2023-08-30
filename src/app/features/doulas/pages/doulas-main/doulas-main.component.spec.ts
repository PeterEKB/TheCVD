import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoulasMainComponent } from './doulas-main.component';

describe('DoulasMainComponent', () => {
  let component: DoulasMainComponent;
  let fixture: ComponentFixture<DoulasMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoulasMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoulasMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
