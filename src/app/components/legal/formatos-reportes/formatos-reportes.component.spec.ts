import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatosReportesComponent } from './formatos-reportes.component';

describe('FormatosReportesComponent', () => {
  let component: FormatosReportesComponent;
  let fixture: ComponentFixture<FormatosReportesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormatosReportesComponent]
    });
    fixture = TestBed.createComponent(FormatosReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
