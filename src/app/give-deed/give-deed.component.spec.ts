import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveDeedComponent } from './give-deed.component';

describe('GiveDeedComponent', () => {
  let component: GiveDeedComponent;
  let fixture: ComponentFixture<GiveDeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveDeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
