import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGlosorComponent } from './add-glosor.component';

describe('AddGlosorComponent', () => {
  let component: AddGlosorComponent;
  let fixture: ComponentFixture<AddGlosorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGlosorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGlosorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
