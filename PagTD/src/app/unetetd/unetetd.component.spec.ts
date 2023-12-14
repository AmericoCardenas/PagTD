import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnetetdComponent } from './unetetd.component';

describe('UnetetdComponent', () => {
  let component: UnetetdComponent;
  let fixture: ComponentFixture<UnetetdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnetetdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnetetdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
