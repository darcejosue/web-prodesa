import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantComponent } from './vacant.component';

describe('VacantComponent', () => {
  let component: VacantComponent;
  let fixture: ComponentFixture<VacantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacantComponent]
    });
    fixture = TestBed.createComponent(VacantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
