import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRoutesComponent } from './sidebar-routes.component';

describe('SidebarRoutesComponent', () => {
  let component: SidebarRoutesComponent;
  let fixture: ComponentFixture<SidebarRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
