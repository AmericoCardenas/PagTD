import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonupComponent } from './botonup.component';

describe('BotonupComponent', () => {
  let component: BotonupComponent;
  let fixture: ComponentFixture<BotonupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
