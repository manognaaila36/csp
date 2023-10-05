import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MUpdateComponent } from './m-update.component';

describe('MUpdateComponent', () => {
  let component: MUpdateComponent;
  let fixture: ComponentFixture<MUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
