import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FUpdateComponent } from './f-update.component';

describe('FUpdateComponent', () => {
  let component: FUpdateComponent;
  let fixture: ComponentFixture<FUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
