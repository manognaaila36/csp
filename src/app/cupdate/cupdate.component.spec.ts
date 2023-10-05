import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupdateComponent } from './cupdate.component';

describe('CupdateComponent', () => {
  let component: CupdateComponent;
  let fixture: ComponentFixture<CupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
