import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUserNotConnectedComponent } from './nav-user-not-connected.component';

describe('NavUserNotConnectedComponent', () => {
  let component: NavUserNotConnectedComponent;
  let fixture: ComponentFixture<NavUserNotConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavUserNotConnectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavUserNotConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
