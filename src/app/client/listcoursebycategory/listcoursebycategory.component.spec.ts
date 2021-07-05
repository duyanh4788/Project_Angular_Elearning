import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcoursebycategoryComponent } from './listcoursebycategory.component';

describe('ListcoursebycategoryComponent', () => {
  let component: ListcoursebycategoryComponent;
  let fixture: ComponentFixture<ListcoursebycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcoursebycategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcoursebycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
