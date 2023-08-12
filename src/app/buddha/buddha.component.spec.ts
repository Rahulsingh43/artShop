import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddhaComponent } from './buddha.component';

describe('BuddhaComponent', () => {
  let component: BuddhaComponent;
  let fixture: ComponentFixture<BuddhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuddhaComponent]
    });
    fixture = TestBed.createComponent(BuddhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
