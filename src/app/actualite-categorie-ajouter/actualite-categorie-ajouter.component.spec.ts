import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteCategorieAjouterComponent } from './actualite-categorie-ajouter.component';

describe('ActualiteCategorieAjouterComponent', () => {
  let component: ActualiteCategorieAjouterComponent;
  let fixture: ComponentFixture<ActualiteCategorieAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualiteCategorieAjouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualiteCategorieAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
