import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcoursemanagerComponent } from './addcoursemanager.component';

describe('AddcoursemanagerComponent', () => {
  let component: AddcoursemanagerComponent;
  let fixture: ComponentFixture<AddcoursemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcoursemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcoursemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
