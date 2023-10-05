import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MReadComponent } from './m-read.component';

describe('MReadComponent', () => {
  let component: MReadComponent;
  let fixture: ComponentFixture<MReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
