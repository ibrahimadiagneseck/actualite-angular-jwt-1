import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { UserService } from './service/user.service';
import { AuthenticationService } from './service/authentication.service';
import { AuthenticationGuard } from './guard/authentication.guard';
import { NotificationModule } from './notification.module';
import { NotificationService } from './service/notification.service';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActualiteComponent } from './actualite/actualite.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ActualiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NotificationModule,

    BrowserAnimationsModule,

    MatDialogModule // popup
  ],
  providers: [
    NotificationService,
    AuthenticationGuard,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,    // Fournit le type d'intercepteur HTTP à utiliser
      useClass: AuthInterceptor,     // Utilise la classe AuthInterceptor comme implémentation de l'intercepteur
      multi: true                    // Permet à l'intercepteur d'être utilisé en tant que multiple intercepteurs
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
