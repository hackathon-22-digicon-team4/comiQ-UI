import type { Book } from "@/types/types";
import bookImage from "@/assets/p00000a.jpg";

export const books: Book[] = [
  {
    id: "1",
    title: "aaa",
    imageUrl: bookImage,
    bookPages: [
      {
        bookId: "1",
        pageNum: 1,
        imageUrl: bookImage,
      },
    ],
  },
  {
    id: "2",
    title: "bbb",
    imageUrl: bookImage,
    bookPages: [
      {
        bookId: "1",
        pageNum: 1,
        imageUrl: bookImage,
      },
    ],
  },
];
