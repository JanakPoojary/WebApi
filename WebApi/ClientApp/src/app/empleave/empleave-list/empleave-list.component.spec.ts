import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleaveListComponent } from './empleave-list.component';

describe('EmpleaveListComponent', () => {
  let component: EmpleaveListComponent;
  let fixture: ComponentFixture<EmpleaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleaveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
