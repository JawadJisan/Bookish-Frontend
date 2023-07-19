export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  addedBy: string | null;
  image?: string | null;
}

export interface IWishlist {
  email: string;
  books: IBook[];
}

export interface IReview {
  userEmail: string;
  review: string;
}
