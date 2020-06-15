import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    id: string;

    constructor
        (private httpClient: HttpClient,
            @Inject('BASE_URL') private baseUrl: string,
    ) { }

    getAllMovies(): Observable<Movie[]> {
        return this.httpClient.get<Array<Movie>>(this.baseUrl + 'api/Movies');
    }

    getMovie(id: number): Observable<Movie> {
        return this.httpClient.get<Movie>(this.baseUrl + 'api/Movies/' + id);
    }

    add(movie: Movie): Observable<Movie> {
        return this.httpClient.post<Movie>(this.baseUrl + 'api/Movies', movie);
    }

    delete(id: number): Observable<Movie> {
        return this.httpClient.delete<Movie>(this.baseUrl + 'api/Movies/' + id);
    }

    update(id: number, movie: Movie): Observable<Movie> {
        return this.httpClient.put<Movie>(this.baseUrl + 'api/Movies/' + id, movie);
    }
}
