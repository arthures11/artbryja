import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KernelMouseDriverComponent } from './kernel-mouse-driver.component';

describe('KernelMouseDriverComponent', () => {
  let component: KernelMouseDriverComponent;
  let fixture: ComponentFixture<KernelMouseDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KernelMouseDriverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KernelMouseDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
