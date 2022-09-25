export interface Book {
  id: string;
  title: string;
  bookSeriesId: string;
  totalPages: number;
  imageUrl: string;
}

export interface BookSeries {
  id: string;
  title: string;
  authorId: string;
  authorName: string;
  description: string;
  imageUrl: string;
}

export interface Stamp {
  id: string;
  name: string;
  imageUrl: string;
}

export interface BookUserStamp {
  id: string;
  bookId: string;
  pageNum: number;
  x: number;
  y: number;
  userId: string;
  stampId: string;
  bookPageImageUrl: string;
}
