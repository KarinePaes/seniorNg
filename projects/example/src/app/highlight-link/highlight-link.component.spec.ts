import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightLinkComponent } from './highlight-link.component';

describe('HighlightLinkComponent', () => {
  let component: HighlightLinkComponent;
  let fixture: ComponentFixture<HighlightLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
