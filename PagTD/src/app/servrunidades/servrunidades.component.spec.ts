import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServrunidadesComponent } from './servrunidades.component';

describe('ServrunidadesComponent', () => {
  let component: ServrunidadesComponent;
  let fixture: ComponentFixture<ServrunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServrunidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServrunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
