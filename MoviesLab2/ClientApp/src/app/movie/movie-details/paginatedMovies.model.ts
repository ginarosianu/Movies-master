import { Movie } from "../shared/movie.model";


export interface PaginatedFlowers {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    items: Movie[];
}
