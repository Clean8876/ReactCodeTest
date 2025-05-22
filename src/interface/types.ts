
export interface IAuthor {
  id: string;
  name: string;
  email: string;
}

export interface IBlogPost {
  id: string;
  title: string;
  body: string;
  author: IAuthor;
}
