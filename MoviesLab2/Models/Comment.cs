﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesLab2.Models
{
    public class Comment
    {
        public long Id { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
        public bool Important { get; set; }

        //public long  MovieId { get; set; }

        public Movie Movie { get; set; }

        public User AddedBy { get; set; }

    }

}
