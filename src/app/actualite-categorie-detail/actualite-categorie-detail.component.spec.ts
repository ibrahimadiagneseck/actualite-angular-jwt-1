import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteCategorieDetailComponent } from './actualite-categorie-detail.component';

describe('ActualiteCategorieDetailComponent', () => {
  let component: ActualiteCategorieDetailComponent;
  let fixture: ComponentFixture<ActualiteCategorieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualiteCategorieDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualiteCategorieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
