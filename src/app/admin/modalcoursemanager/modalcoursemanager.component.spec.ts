import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcoursemanagerComponent } from './modalcoursemanager.component';

describe('ModalcoursemanagerComponent', () => {
  let component: ModalcoursemanagerComponent;
  let fixture: ComponentFixture<ModalcoursemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalcoursemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcoursemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
