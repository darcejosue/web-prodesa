import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCEAComponent } from './tcea.component';

describe('TCEAComponent', () => {
  let component: TCEAComponent;
  let fixture: ComponentFixture<TCEAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TCEAComponent]
    });
    fixture = TestBed.createComponent(TCEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
