import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapricornComponent } from './capricorn.component';

describe('CapricornComponent', () => {
  let component: CapricornComponent;
  let fixture: ComponentFixture<CapricornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapricornComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapricornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
