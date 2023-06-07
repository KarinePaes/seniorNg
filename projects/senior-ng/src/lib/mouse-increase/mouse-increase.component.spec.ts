import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseIncreaseComponent } from './mouse-increase.component';

describe('MouseIncreaseComponent', () => {
  let component: MouseIncreaseComponent;
  let fixture: ComponentFixture<MouseIncreaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseIncreaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseIncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
