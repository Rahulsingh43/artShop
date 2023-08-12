import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfaddressComponent } from './profaddress.component';

describe('ProfaddressComponent', () => {
  let component: ProfaddressComponent;
  let fixture: ComponentFixture<ProfaddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfaddressComponent]
    });
    fixture = TestBed.createComponent(ProfaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
