import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothReadComponent } from './cloth-read.component';

describe('ClothReadComponent', () => {
  let component: ClothReadComponent;
  let fixture: ComponentFixture<ClothReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
