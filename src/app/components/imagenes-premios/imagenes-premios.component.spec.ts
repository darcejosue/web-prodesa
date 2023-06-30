import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesPremiosComponent } from './imagenes-premios.component';

describe('ImagenesPremiosComponent', () => {
  let component: ImagenesPremiosComponent;
  let fixture: ComponentFixture<ImagenesPremiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagenesPremiosComponent]
    });
    fixture = TestBed.createComponent(ImagenesPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
