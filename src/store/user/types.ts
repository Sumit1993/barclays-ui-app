/* --- STATE --- */
export interface IUserResponse {
  user: {
    role: string;
    _id: string;
    name: string;
    email: string;
  };
  token: string;
}

export interface ISignupRequest {
  name: string;
  email: string;
  password: string;
}

export interface ISigninRequest {
  email: string;
  password: string;
}

export interface IUserInfo {
  name: string;
  email: string;
  token: string;
}

export interface UserState {
  userInfo?: IUserInfo;
  loading: boolean;
  error: any;
}

export type ContainerState = UserState;
