import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonwhatsappComponent } from './botonwhatsapp.component';

describe('BotonwhatsappComponent', () => {
  let component: BotonwhatsappComponent;
  let fixture: ComponentFixture<BotonwhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonwhatsappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonwhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
