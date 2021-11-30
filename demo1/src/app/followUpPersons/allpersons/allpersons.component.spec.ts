import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpersonsComponent } from './allpersons.component';

describe('AllpersonsComponent', () => {
  let component: AllpersonsComponent;
  let fixture: ComponentFixture<AllpersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
