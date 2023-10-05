import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MInsertComponent } from './m-insert.component';

describe('MInsertComponent', () => {
  let component: MInsertComponent;
  let fixture: ComponentFixture<MInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
