import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinsertComponent } from './cinsert.component';

describe('CinsertComponent', () => {
  let component: CinsertComponent;
  let fixture: ComponentFixture<CinsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
