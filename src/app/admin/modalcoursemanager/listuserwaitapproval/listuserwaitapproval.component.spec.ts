import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserwaitapprovalComponent } from './listuserwaitapproval.component';

describe('ListuserwaitapprovalComponent', () => {
  let component: ListuserwaitapprovalComponent;
  let fixture: ComponentFixture<ListuserwaitapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuserwaitapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuserwaitapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
