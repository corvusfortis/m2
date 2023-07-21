export interface IUser {
  id: number,
  username: string,
  email: string,
  address: IAddress,
  phone: string,
  website: string,
  company: ICompany
}

export interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: IGeo
}

export interface IGeo {
  lat: string,
  lng: string
}

export interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface IPost {
  userId?: number,
  id?: number,
  title?: string,
  body?: string
}

export interface IComm {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}
