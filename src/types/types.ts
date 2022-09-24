export interface Book {
  id: string;
  title: string;
  imageUrl: string;
  bookPages: {
    bookId: string;
    pageNum: number;
    imageUrl: string;
  }[];
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
