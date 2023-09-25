export interface UserAuthCredentialsI {
  email: string;
  password: string;
  zipcode: string;
  remember_user: boolean;
}

export interface UserI {
  email: string;
  username: string;
  sub: string;
}
