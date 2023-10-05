import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NrtComponent } from './nrt.component';

describe('NrtComponent', () => {
  let component: NrtComponent;
  let fixture: ComponentFixture<NrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NrtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
