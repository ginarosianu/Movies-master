import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from './shared/angular-material.module';

import { CoreModule } from './core/core.module'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CommentComponent } from './comment/comment.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { MovieAddComponent } from './movie/movie-add/movie-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentAddComponent } from './comment/comment-add/comment-add.component';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';



@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        CommentComponent,
        MovieComponent,
        MovieDetailsComponent,
        MovieAddComponent,
        CommentAddComponent,
        RegistrationComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegistrationComponent },
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'movie', component: MovieComponent },
            { path: 'comment', component: CommentComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'movie/:movieId', component: MovieDetailsComponent },
            { path: 'movie-add/:id', component: MovieAddComponent },
        ]),
        BrowserAnimationsModule

    ],
    exports: [AngularMaterialModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
