import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalusermanagerComponent } from './modalusermanager.component';

describe('ModalusermanagerComponent', () => {
  let component: ModalusermanagerComponent;
  let fixture: ComponentFixture<ModalusermanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalusermanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalusermanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
