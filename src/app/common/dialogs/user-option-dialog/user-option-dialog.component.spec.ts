import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOptionDialogComponent } from './user-option-dialog.component';

describe('UserOptionDialogComponent', () => {
  let component: UserOptionDialogComponent;
  let fixture: ComponentFixture<UserOptionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOptionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
