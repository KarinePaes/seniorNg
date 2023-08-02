import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseMouseComponent } from './increase-mouse.component';

describe('IncreaseMouseComponent', () => {
  let component: IncreaseMouseComponent;
  let fixture: ComponentFixture<IncreaseMouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseMouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncreaseMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
