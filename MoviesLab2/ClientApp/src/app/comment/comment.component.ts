import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html'
})
export class CommentComponent {

    public comments: Comment[];

    public name: string = "test";

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
        this.loadComments();
    }

    loadComments() {
        this.http.get<Comment[]>(this.baseUrl + 'api/Comments').subscribe(result => {
            this.comments = result;
            console.log(this.comments);
        }, error => console.error(error));
    }

    submit() {
        var comment: Comment = <Comment>{};
        comment.author = this.name;
        comment.content = this.name;
        comment.important = true

        this.http.post(this.baseUrl + 'api/Comments', comment).subscribe(result => {
            console.log('success!');
            this.loadComments();
        },
            error => {

                if (error.status == 400) {
                    console.log(error.error.errors)
                }
         });
    }
}

    interface Comment
    {
    author: string;
    content: string;
    important: boolean;
    movieId: number
    }

