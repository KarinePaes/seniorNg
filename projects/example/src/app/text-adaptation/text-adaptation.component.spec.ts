import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAdaptationComponent } from './text-adaptation.component';

describe('TextAdaptationComponent', () => {
  let component: TextAdaptationComponent;
  let fixture: ComponentFixture<TextAdaptationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAdaptationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAdaptationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
