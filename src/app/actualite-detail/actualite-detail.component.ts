import { Component, Inject } from '@angular/core';
import { IArticle } from '../model/article';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualite-detail',
  templateUrl: './actualite-detail.component.html',
  styleUrls: ['./actualite-detail.component.css']
})
export class ActualiteDetailComponent {

  article!: IArticle;

  constructor(
    private router: Router,
    private Ref: MatDialogRef<ActualiteDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // recuperer les donnees du bouton popup
    // private toast: NgToastService
  ) { }

  ngOnInit(): void {
    this.article = this.data.article;

  }

  popupFermer() {
    this.Ref.close();
  }

}
