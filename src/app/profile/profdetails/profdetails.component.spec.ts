import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfdetailsComponent } from './profdetails.component';

describe('ProfdetailsComponent', () => {
  let component: ProfdetailsComponent;
  let fixture: ComponentFixture<ProfdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfdetailsComponent]
    });
    fixture = TestBed.createComponent(ProfdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
