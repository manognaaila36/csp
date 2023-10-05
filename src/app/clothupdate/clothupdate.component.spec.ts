import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothupdateComponent } from './clothupdate.component';

describe('ClothupdateComponent', () => {
  let component: ClothupdateComponent;
  let fixture: ComponentFixture<ClothupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
