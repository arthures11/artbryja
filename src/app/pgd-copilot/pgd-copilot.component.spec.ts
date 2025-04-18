import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgdCopilotComponent } from './pgd-copilot.component';

describe('PgdCopilotComponent', () => {
  let component: PgdCopilotComponent;
  let fixture: ComponentFixture<PgdCopilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgdCopilotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgdCopilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
