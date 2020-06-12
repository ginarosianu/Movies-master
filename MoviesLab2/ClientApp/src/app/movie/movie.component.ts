import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html'
})
export class MovieComponent {
   
    public movies: Movie[];

    public name: string = "";

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string)
    { 
        this.loadMovies();
    }

    loadMovies() {
        this.http.get<Movie[]>(this.baseUrl + 'api/Movies').subscribe(result => {
            this.movies = result;
            console.log(this.movies);
        }, error => console.error(error));
    }

    delete(movieId: string) {
        if (confirm('Are you sure you want to delete the movie with id ' + movieId + '?')) {
            this.http.delete(this.baseUrl + 'api/Movies/' + movieId)
                .subscribe
                (
                    result => {
                        alert('Movie successfully deleted!');
                        this.loadMovies();
                    },
                    error => alert('Cannot delete movie - maybe it has comments?')
                )
        }
    }
    submit() {
        var movie: Movie = <Movie>{};
        movie.title = this.name;
        movie.description = this.name;
        movie.genre = Genre.Comedy;
        movie.minute = 5;
        movie.yearOfRelease = 1990;
        movie.director = this.name;
        movie.dateAdded = new Date();
        movie.rating = 2;
        movie.watched = true;


        this.http.post(this.baseUrl + 'api/Movies', movie).subscribe(result => {
            console.log('success!');
            this.loadMovies();
        },
            error => {

                if (error.status == 400) {
                    console.log(error.error.errors)
                }
            });
    }
}


interface Movie {
    id: number,
    title: string;
    description: string;
    genre: Genre;
    minute: number;
    yearOfRelease: number;
    director: string;
    dateAdded: Date;
    rating: number;
    watched: boolean;
}

enum Genre {
    Action = 0,
    Comedy = 1,
    Horror = 2,
    Thriller = 3
}
