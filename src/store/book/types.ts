/* --- STATE --- */
export interface IBookResponse {
  docs: {
    _id: string;
    bookID: number;
    title: string;
    authors: string;
    average_rating: number;
    isbn: number;
    language_code: string;
    ratings_count: number;
    price: number;
    Image: string;
  }[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null;
  nextPage: number;
}

export interface ISearchBookRequest {
  searchText: string;
  paginationOptions: {
    sort: string;
    page: number;
    limit: number;
  };
}

export interface IBookInfo {
  _id: string;
  bookID: number;
  title: string;
  authors: string;
  average_rating: number;
  isbn: number;
  language_code: string;
  ratings_count: number;
  price: number;
  Image: string;
}

export interface IPagination {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null;
  nextPage: number;
}

export interface BookState {
  books: IBookInfo[];
  pagination?: IPagination;
  loading: boolean;
  error: any;
}

export type ContainerState = BookState;
