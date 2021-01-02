export interface IUser {
  id: number;
  fakeToken: string;
  name: IName;
  login: string;
  password: string;
}

export interface IName {
  first: string;
  last: string;
}

export interface ILogin {
  login: string;
  password: string;
}
