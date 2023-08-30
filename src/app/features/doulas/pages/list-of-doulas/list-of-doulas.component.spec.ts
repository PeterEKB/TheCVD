import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDoulasComponent } from './list-of-doulas.component';

describe('ListOfDoulasComponent', () => {
  let component: ListOfDoulasComponent;
  let fixture: ComponentFixture<ListOfDoulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfDoulasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfDoulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
