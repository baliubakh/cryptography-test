import { HttpService } from "../http.service";
import { HttpServiceInstances } from "..";
import {
  IAuthData,
  ISignInResponse,
  ISignUpResponse,
} from "../../types/auth.types";

export class AuthService {
  constructor(private httpService: HttpService) {}
  public signin(data: IAuthData): Promise<void | ISignInResponse> {
    return this.httpService.post("api/users/login/", data);
  }
  public signup(data: IAuthData): Promise<void | ISignUpResponse> {
    return this.httpService.post("api/users/register/", data);
  }
}

const factory = new HttpServiceInstances();
export const authService = new AuthService(factory.createAxiosHttpService());
