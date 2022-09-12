import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerHomepageComponent } from './interviewer-homepage.component';

describe('InterviewerHomepageComponent', () => {
  let component: InterviewerHomepageComponent;
  let fixture: ComponentFixture<InterviewerHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
