import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/movie.model';
import { MovieGenre } from '../shared/enum/movieGenre.enum';
import { Location } from '@angular/common';
import { MovieWatched } from '../shared/enum/movieWatched';

@Component({
    selector: 'app-movie-add',
    templateUrl: './movie-add.component.html',
    styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

    private movieForm: FormGroup;
    public movieGenres = Object.values(MovieGenre);
    public movieWatched = Object.values(MovieWatched);
    public movie: Movie;
    public id: string;


    constructor(
        private movieService: MovieService,
        private location: Location,
        private fb: FormBuilder,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.addMovieForm();
        this.getMovie();
    }

    addMovieForm() {
        this.movieForm = this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            genre: [''],
            minute: [0, Validators.min(0)],
            yearOfRelease: [0],
            director: [''],
            dateAdded: [''],
            rating: [0],
            //watched: ['true']
        });
    }

    getMovie() {
        var id = parseInt(this.route.snapshot.paramMap.get('id'));

        if (id !== 0) {
            this.movieService.getMovie(id)
                .subscribe(result => {
                    this.movie = result;

                    if (this.movie !== null) {
                        this.movieForm.setValue({
                            title: this.movie.title,
                            description: this.movie.description,
                            genre: this.movie.genre,
                            minute: this.movie.minute,
                            yearOfRelease: this.movie.yearOfRelease,
                            director: this.movie.director,
                            dateAdded: this.movie.dateAdded,
                            rating: this.movie.rating,
                            //watched: this.movie.watched,
                        });
                    }
                });
        }
    }

    onSubmit({ value, valid }) {

        console.log("wrong place");

        if (valid) {
            var id = parseInt(this.route.snapshot.paramMap.get('id'));

            if (id === 0) {
                this.movieService.add(value)
                    .subscribe(
                        _ => this.location.back(),
                        err => {
                            const validationErrors = err.error.errors;

                            Object.keys(validationErrors).forEach(prop => {
                                const formControl = this.movieForm.get(prop.toLowerCase());
                                if (formControl) {

                                    formControl.setErrors({
                                        serverError: validationErrors[prop][0]
                                    });
                                }
                            });
                        }
                    );
            } else {
                value.id = id;
                this.movieService.update(id, value)
                    .subscribe(
                        _ => this.location.back(),
                        err => {
                            const validationErrors = err.error.errors;

                            Object.keys(validationErrors).forEach(prop => {
                                const formControl = this.movieForm.get(prop.toLowerCase());
                                if (formControl) {

                                    formControl.setErrors({
                                        serverError: validationErrors[prop][0]
                                    });
                                }
                            });
                        }
                    );
            }

        }
    }

    goBack() {
        this.location.back();
    }

}
