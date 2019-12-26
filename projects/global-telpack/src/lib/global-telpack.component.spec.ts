import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTelpackComponent } from './global-telpack.component';

describe('GlobalTelpackComponent', () => {
  let component: GlobalTelpackComponent;
  let fixture: ComponentFixture<GlobalTelpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalTelpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalTelpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
