import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberIdentifierComponent } from './number-identifier.component';

describe('NumberIdentifierComponent', () => {
  let component: NumberIdentifierComponent;
  let fixture: ComponentFixture<NumberIdentifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberIdentifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
