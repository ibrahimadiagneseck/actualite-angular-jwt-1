import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteArticleDetailComponent } from './actualite-article-detail.component';

describe('ActualiteArticleDetailComponent', () => {
  let component: ActualiteArticleDetailComponent;
  let fixture: ComponentFixture<ActualiteArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualiteArticleDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualiteArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
