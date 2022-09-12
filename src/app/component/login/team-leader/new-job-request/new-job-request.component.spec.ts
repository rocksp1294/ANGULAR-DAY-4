import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobRequestComponent } from './new-job-request.component';

describe('NewJobRequestComponent', () => {
  let component: NewJobRequestComponent;
  let fixture: ComponentFixture<NewJobRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewJobRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewJobRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
