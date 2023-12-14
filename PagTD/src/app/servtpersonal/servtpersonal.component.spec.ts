import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServtpersonalComponent } from './servtpersonal.component';

describe('ServtpersonalComponent', () => {
  let component: ServtpersonalComponent;
  let fixture: ComponentFixture<ServtpersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServtpersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServtpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
