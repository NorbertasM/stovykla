import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationLisComponent } from './registration-list.component';

describe('RegistrationLisComponent', () => {
  let component: RegistrationLisComponent;
  let fixture: ComponentFixture<RegistrationLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationLisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
