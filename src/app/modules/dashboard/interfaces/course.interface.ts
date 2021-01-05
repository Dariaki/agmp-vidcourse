export interface ICourse {
  id: number;
  name: string;
  length: number;
  description: string;
  date: string;
  authors: Array<IAuthor>;
  isTopRated: boolean;
}

export interface IAuthor {
  id: number;
  name: string;
}

