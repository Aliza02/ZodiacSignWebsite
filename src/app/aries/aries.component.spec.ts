import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesComponent } from './aries.component';

describe('AriesComponent', () => {
  let component: AriesComponent;
  let fixture: ComponentFixture<AriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
