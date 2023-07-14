import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteCategorieEditComponent } from './actualite-categorie-edit.component';

describe('ActualiteCategorieEditComponent', () => {
  let component: ActualiteCategorieEditComponent;
  let fixture: ComponentFixture<ActualiteCategorieEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualiteCategorieEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualiteCategorieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
