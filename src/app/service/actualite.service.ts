import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IArticle } from '../model/article';
import { ICategorie } from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}


  // recuperer un fichier
  public getFichierByIdFichier(idFichier: number):Observable<any> {
    return this.http.get<any>(`${this.host}/Fichier/${idFichier}`);
  }

  // recuperer les identifiants d'un fichier'
  public getFichier(idFichier: number):Observable<any> {
    return this.http.get<any>(`${this.host}/FichierById/${idFichier}`);
  }


  // Ajouter un fichier
  public ajouterFichier(file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('fichier', file);

    console.log(formData);


    const req = new HttpRequest('POST', `${this.host}/AjouterFichier`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  // Ajouter un fichier en recuperant l'id enregistré
  public AjouterFichierById(file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('fichier', file);

    console.log(formData);

    const req = new HttpRequest('POST', `${this.host}/AjouterFichierById`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }




  // affecter une photo à un article
  public AjouterArticlePhotoById(idarticle: number, idfichier: String): Observable<void> {
    return this.http.post<void>(`${this.host}/AjouterArticlePhotoById/${idarticle}/${idfichier}`, null);
  }




  //  CRUD ARTICLE
  public getArticles():Observable<IArticle[]> {
    return this.http.get<IArticle[]>(this.host+"/Articles");
  }

  public postArticle(article: IArticle): Observable<IArticle> {
    return this.http.post<IArticle>(`${this.host}/AjouterArticle`, article);
  }

  public putArticle(article: IArticle, idarticle: number): Observable<IArticle> {
    return this.http.put<IArticle>(`${this.host}/ModifierArticle/${idarticle}`, article);
  }

  public deleteArticle(idarticle: number): Observable<void> {
    return this.http.delete<void>(`${this.host}/SupprimerArticle/${idarticle}`);
  }

  public getArticleByIdarticle(idarticle: number):Observable<IArticle> {
    return this.http.get<IArticle>(`${this.host}/ArticleById/${idarticle}`);
  }


  //  CRUD CATEGORIE
  public getCategories():Observable<ICategorie[]> {
    return this.http.get<ICategorie[]>(this.host+"/Categories");
  }

  public postCategorie(categorie: ICategorie): Observable<ICategorie> {
    return this.http.post<ICategorie>(`${this.host}/AjouterCategorie`, categorie);
  }

  public putCategorie(categorie: ICategorie, idcategorie: number): Observable<ICategorie> {
    return this.http.put<ICategorie>(`${this.host}/ModifierCategorie/${idcategorie}`, categorie);
  }

  public deleteCategorie(idcategorie: number): Observable<void> {
    return this.http.delete<void>(`${this.host}/SupprimerCategorie/${idcategorie}`);
  }

  public getCategorieBycategorie(idcategorie: number):Observable<ICategorie> {
    return this.http.get<ICategorie>(`${this.host}/CategorieById/${idcategorie}`);
  }




}
