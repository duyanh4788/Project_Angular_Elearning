import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserapprovalComponent } from './listuserapproval.component';

describe('ListuserapprovalComponent', () => {
  let component: ListuserapprovalComponent;
  let fixture: ComponentFixture<ListuserapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuserapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuserapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
