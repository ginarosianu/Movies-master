using MoviesLab2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesLab2.ViewModel
{
    public class CommentForMovieDetails
    {
        public string Author { get; set; }
        public string Content { get; set; }

        public bool Important { get; set; }


        public static CommentForMovieDetails FromComment(Comment comment)
        {
            return new CommentForMovieDetails
            {
                Author = comment.Author,
                Content = comment.Content,
                Important = comment.Important
            };
        }
    }
}
