import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrinkAnimationComponent } from './shrink-animation.component';

describe('ShrinkAnimationComponent', () => {
  let component: ShrinkAnimationComponent;
  let fixture: ComponentFixture<ShrinkAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrinkAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrinkAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
