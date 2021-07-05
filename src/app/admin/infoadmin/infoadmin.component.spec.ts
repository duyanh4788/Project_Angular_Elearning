import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoadminComponent } from './infoadmin.component';

describe('InfoadminComponent', () => {
  let component: InfoadminComponent;
  let fixture: ComponentFixture<InfoadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
