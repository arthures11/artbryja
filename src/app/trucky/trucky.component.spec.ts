import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckyComponent } from './trucky.component';

describe('TruckyComponent', () => {
  let component: TruckyComponent;
  let fixture: ComponentFixture<TruckyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TruckyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
