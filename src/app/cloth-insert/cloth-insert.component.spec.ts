import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothInsertComponent } from './cloth-insert.component';

describe('ClothInsertComponent', () => {
  let component: ClothInsertComponent;
  let fixture: ComponentFixture<ClothInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
