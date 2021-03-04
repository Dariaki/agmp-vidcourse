export interface ICourse {
  id: number;
  name: string;
  length: number;
  description: string;
  date: string;
  authors: Array<IAuthor>;
  isTopRated: boolean;
  wow?: string;
}

export interface IAuthor {
  id: string;
  name: string;
  lastName: string;
}

export interface IAuthorsList {
  id: string;
  name: string;
}
