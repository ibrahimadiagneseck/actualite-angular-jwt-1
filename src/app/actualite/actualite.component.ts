import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ICategorie } from '../model/categorie';
import { IArticle } from '../model/article';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActualiteService } from '../service/actualite.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationType } from '../enum/notification-type.enum';
import { ActualiteDetailComponent } from '../actualite-detail/actualite-detail.component';

declare var $: any; // Déclaration de jQuery

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit, OnDestroy, AfterViewInit {

  // ---------------------------------- actualite ------------------------------

  public categories: ICategorie[] = [];
  public articles: IArticle[] = [];

  // ----------------------------------------------------------------------------



  private titleSubject = new BehaviorSubject<string>('Accueil');
  public titleAction$ = this.titleSubject.asObservable();


  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private actualiteService: ActualiteService,
    private matDialog: MatDialog,
  ) { }


  ngAfterViewInit() {
    // Initialisation du carousel des témoignages
    $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
    });
  }

  ngOnInit(): void {

    this.recupererCategories();
    this.recupererArticles();

  }


  // ---------------------------------- actualite ------------------------------

  recupererCategories() {
    this.actualiteService.getCategories().subscribe({
      next: (
        donnees: ICategorie[]) => {
        this.categories = donnees;
      },
      error: (
        erreurs: HttpErrorResponse) => {
        console.log(erreurs);
      }
    });
  }

  recupererArticles() {
    this.actualiteService.getArticles().subscribe({
      next: (
        donnees: IArticle[]) => {
        this.articles = donnees;
      },
      error: (
        erreurs: HttpErrorResponse) => {
        console.log(erreurs);
      }
    });
  }

  // --------

  popupDetail(article: IArticle) {
    this.matDialog.open(
      ActualiteDetailComponent,
      {
        width: '80%',
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '1000ms',
        data: {
          article: article
        }
      }
    );
  }

  popupCategorieEdit(categorie: ICategorie) {
    // this.matDialog.open(
    //   ActualiteCategorieEditComponent,
    //   {
    //     width: '80%',
    //     enterAnimationDuration: '1000ms',
    //     exitAnimationDuration: '1000ms',
    //     data: {
    //       categorie: categorie
    //     }
    //   }
    // );
  }

  popupCategorieAjouter() {
    // this.matDialog.open(
    //   ActualiteCategorieAjouterComponent,
    //   {
    //     width: '80%',
    //     enterAnimationDuration: '1000ms',
    //     exitAnimationDuration: '1000ms',
    //     data: {
    //     }
    //   }
    // );
  }

  popupCategorieDelete(idcategorie: number) {

  }

  // --------

  popupArticleDetail(article: IArticle) {
    // this.matDialog.open(
    //   ActualiteArticleDetailComponent,
    //   {
    //     width: '80%',
    //     enterAnimationDuration: '1000ms',
    //     exitAnimationDuration: '1000ms',
    //     data: {
    //       article: article
    //     }
    //   }
    // );
  }

  popupArticleEdit(article: IArticle) {
    // this.matDialog.open(
    //   ActualiteArticleEditComponent,
    //   {
    //     width: '80%',
    //     enterAnimationDuration: '1000ms',
    //     exitAnimationDuration: '1000ms',
    //     data: {
    //       article: article
    //     }
    //   }
    // );
  }

  popupArticleAjouter() {
    // this.matDialog.open(
    //   ActualiteArticleAjouterComponent,
    //   {
    //     width: '80%',
    //     enterAnimationDuration: '1000ms',
    //     exitAnimationDuration: '1000ms',
    //     data: {
    //     }
    //   }
    // );
  }

  popupArticleDelete(idarticle: number) {

  }

  // ----------------------------------------------------------------------------



  // -----------------------List User-----------------------------------------------------------------------------

  public changeTitle(title: string): void {
    this.titleSubject.next(title);
  }


  // ----------------------------------------------------------------------------------------------------






  // ----------------------------------------------------------------------------------------------------

  private clickButton(buttonId: string): void {
    document.getElementById(buttonId)?.click();
  }



  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }




}
