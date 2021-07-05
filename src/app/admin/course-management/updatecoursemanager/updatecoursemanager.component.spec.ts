import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecoursemanagerComponent } from './updatecoursemanager.component';

describe('UpdatecoursemanagerComponent', () => {
  let component: UpdatecoursemanagerComponent;
  let fixture: ComponentFixture<UpdatecoursemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecoursemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecoursemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
