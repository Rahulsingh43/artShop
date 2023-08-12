import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilenavbarComponent } from './profilenavbar.component';

describe('ProfilenavbarComponent', () => {
  let component: ProfilenavbarComponent;
  let fixture: ComponentFixture<ProfilenavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilenavbarComponent]
    });
    fixture = TestBed.createComponent(ProfilenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
