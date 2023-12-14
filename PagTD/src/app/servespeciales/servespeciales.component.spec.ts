import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServespecialesComponent } from './servespeciales.component';

describe('ServespecialesComponent', () => {
  let component: ServespecialesComponent;
  let fixture: ComponentFixture<ServespecialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServespecialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServespecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
