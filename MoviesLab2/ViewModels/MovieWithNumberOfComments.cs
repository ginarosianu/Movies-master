using DocumentFormat.OpenXml.Office2010.Excel;
using MoviesLab2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesLab2.ViewModels
{
    public class MovieWithNumberOfComments
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Genre Genre { get; set; }
        public int Minute { get; set; }
        public int YearOfRelease { get; set; }
        public string Director { get; set; }
        public DateTime DateAdded { get; set; }
        // [Range(1, 10)]
        public int Rating { get; set; }
        public bool Watched { get; set; }
        public long NumberOfComments { get; set; }


        public static MovieWithNumberOfComments FromMovie(Movie movie)
        {

            return new MovieWithNumberOfComments
            {
                Id = movie.Id,
                Title = movie.Title,
                Description = movie.Description,
                Genre = movie.Genre,
                Minute = movie.Minute,
                YearOfRelease = movie.YearOfRelease,
                Director = movie.Director,
                DateAdded = movie.DateAdded,
                Rating = movie.Rating,
                Watched = movie.Watched,
                NumberOfComments = movie.Comments.Count
            };

        }
    }
}