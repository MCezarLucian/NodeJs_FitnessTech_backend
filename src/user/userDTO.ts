export class UserDTO {
  username: string;
  password: string;
  email: string;
  name: string;
  role: string;
  age: number;
  height: number;
  gender: string;
  problems: string[];
  registrationDate: Date;
  weight: number;
  valid: boolean;
  history: UserHistory[];
  image: string;
  confirmed: boolean;
}

export class UserJWT {
  username: string;
  // role: string;
}

export class UserHistory {
  weight: number;
  date: Date;
}
