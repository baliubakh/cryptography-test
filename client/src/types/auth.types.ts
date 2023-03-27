export interface IAuthData {
  username: string;
  password: string;
}

export interface ISignUpData {
  username: string;
  password: string;
  check_password: string;
}

export interface ISignInResponse {
  status: "success" | "fail";
  data: {
    token: string;
    user_id: number;
  };
}

export interface ISignUpResponse {
  email: string;
  first_name: string;
  last_name: string;
  role: string;
}

export interface IUserState {
  username: string;
}

export interface IUsersState {
  user: { id: number; first_name: string; last_name: string };
  education: string;
  tech_stack: string[];
  work_experience: string;
  years_experience: number;
}
