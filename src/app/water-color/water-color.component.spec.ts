import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterColorComponent } from './water-color.component';

describe('WaterColorComponent', () => {
  let component: WaterColorComponent;
  let fixture: ComponentFixture<WaterColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterColorComponent]
    });
    fixture = TestBed.createComponent(WaterColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
