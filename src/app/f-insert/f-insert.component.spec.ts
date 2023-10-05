import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FInsertComponent } from './f-insert.component';

describe('FInsertComponent', () => {
  let component: FInsertComponent;
  let fixture: ComponentFixture<FInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
