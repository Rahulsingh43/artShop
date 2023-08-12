import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilPastelComponent } from './oil-pastel.component';

describe('OilPastelComponent', () => {
  let component: OilPastelComponent;
  let fixture: ComponentFixture<OilPastelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OilPastelComponent]
    });
    fixture = TestBed.createComponent(OilPastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
