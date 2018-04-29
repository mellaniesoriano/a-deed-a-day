import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeedComponent } from './get-deed.component';

describe('GetDeedComponent', () => {
  let component: GetDeedComponent;
  let fixture: ComponentFixture<GetDeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
