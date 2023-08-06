import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseSensibilityComponent } from './increase-sensibility.component';

describe('IncreaseSensibilityComponent', () => {
  let component: IncreaseSensibilityComponent;
  let fixture: ComponentFixture<IncreaseSensibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseSensibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncreaseSensibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
