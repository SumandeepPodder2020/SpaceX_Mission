import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexMissionsComponent } from './spacex-missions.component';

describe('SpacexMissionsComponent', () => {
  let component: SpacexMissionsComponent;
  let fixture: ComponentFixture<SpacexMissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexMissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
