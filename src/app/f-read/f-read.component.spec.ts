import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FReadComponent } from './f-read.component';

describe('FReadComponent', () => {
  let component: FReadComponent;
  let fixture: ComponentFixture<FReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
