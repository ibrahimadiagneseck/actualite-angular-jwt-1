import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteArticleAjouterComponent } from './actualite-article-ajouter.component';

describe('ActualiteArticleAjouterComponent', () => {
  let component: ActualiteArticleAjouterComponent;
  let fixture: ComponentFixture<ActualiteArticleAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualiteArticleAjouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualiteArticleAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
