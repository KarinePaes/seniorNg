import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseControlerComponent } from './mouse-controler.component';

describe('MouseControleComponent', () => {
  let component: MouseControlerComponent;
  let fixture: ComponentFixture<MouseControlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseControlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
