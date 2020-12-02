import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTextareaComponent } from './generic-textarea.component';

describe('GenericTextareaComponent', () => {
  let component: GenericTextareaComponent;
  let fixture: ComponentFixture<GenericTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
