import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUserConnectedComponent } from './nav-user-connected.component';

describe('NavUserConnectedComponent', () => {
  let component: NavUserConnectedComponent;
  let fixture: ComponentFixture<NavUserConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavUserConnectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavUserConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
