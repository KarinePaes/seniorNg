import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionWarningComponent } from './action-warning.component';

describe('ActionWarningComponent', () => {
  let component: ActionWarningComponent;
  let fixture: ComponentFixture<ActionWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
