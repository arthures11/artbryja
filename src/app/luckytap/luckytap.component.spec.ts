import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckytapComponent } from './luckytap.component';

describe('LuckytapComponent', () => {
  let component: LuckytapComponent;
  let fixture: ComponentFixture<LuckytapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LuckytapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuckytapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
