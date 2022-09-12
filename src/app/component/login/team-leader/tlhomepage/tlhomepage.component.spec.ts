import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlhomepageComponent } from './tlhomepage.component';

describe('TlhomepageComponent', () => {
  let component: TlhomepageComponent;
  let fixture: ComponentFixture<TlhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlhomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TlhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
