import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFollowupPersonComponent } from './edit-followup-person.component';

describe('EditFollowupPersonComponent', () => {
  let component: EditFollowupPersonComponent;
  let fixture: ComponentFixture<EditFollowupPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFollowupPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFollowupPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
