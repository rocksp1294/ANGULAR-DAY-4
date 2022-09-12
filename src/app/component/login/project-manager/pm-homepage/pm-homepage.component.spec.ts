import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmHomepageComponent } from './pm-homepage.component';

describe('PmHomepageComponent', () => {
  let component: PmHomepageComponent;
  let fixture: ComponentFixture<PmHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
