import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoloComponent } from './ecolo.component';

describe('EcoloComponent', () => {
  let component: EcoloComponent;
  let fixture: ComponentFixture<EcoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
