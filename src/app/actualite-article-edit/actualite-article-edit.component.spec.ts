import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteArticleEditComponent } from './actualite-article-edit.component';

describe('ActualiteArticleEditComponent', () => {
  let component: ActualiteArticleEditComponent;
  let fixture: ComponentFixture<ActualiteArticleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualiteArticleEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualiteArticleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
