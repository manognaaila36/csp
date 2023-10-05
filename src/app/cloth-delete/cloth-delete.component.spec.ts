import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothDeleteComponent } from './cloth-delete.component';

describe('ClothDeleteComponent', () => {
  let component: ClothDeleteComponent;
  let fixture: ComponentFixture<ClothDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
