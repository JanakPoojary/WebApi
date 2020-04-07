import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeLeaveListComponent } from './take-leave-list.component';

describe('TakeLeaveListComponent', () => {
  let component: TakeLeaveListComponent;
  let fixture: ComponentFixture<TakeLeaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeLeaveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeLeaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
