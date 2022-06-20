import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariusComponent } from './aquarius.component';

describe('AquariusComponent', () => {
  let component: AquariusComponent;
  let fixture: ComponentFixture<AquariusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquariusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
