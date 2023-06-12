import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyComponent } from './ley.component';

describe('LeyComponent', () => {
  let component: LeyComponent;
  let fixture: ComponentFixture<LeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeyComponent]
    });
    fixture = TestBed.createComponent(LeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
