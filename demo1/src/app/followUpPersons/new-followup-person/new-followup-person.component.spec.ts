import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFollowupPersonComponent } from './new-followup-person.component';

describe('NewFollowupPersonComponent', () => {
  let component: NewFollowupPersonComponent;
  let fixture: ComponentFixture<NewFollowupPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFollowupPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFollowupPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
