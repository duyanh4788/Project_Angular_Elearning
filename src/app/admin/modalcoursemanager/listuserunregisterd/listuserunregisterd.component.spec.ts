import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserunregisterdComponent } from './listuserunregisterd.component';

describe('ListuserunregisterdComponent', () => {
  let component: ListuserunregisterdComponent;
  let fixture: ComponentFixture<ListuserunregisterdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuserunregisterdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuserunregisterdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
