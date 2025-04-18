import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactTechMasteryComponent } from './react-tech-mastery.component';

describe('ReactTechMasteryComponent', () => {
  let component: ReactTechMasteryComponent;
  let fixture: ComponentFixture<ReactTechMasteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactTechMasteryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactTechMasteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
