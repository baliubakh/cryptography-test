import { HttpService } from "../http.service";
import { HttpServiceInstances } from "..";
import { IUsersState } from "../../types/auth.types";

export class UsersService {
  constructor(private httpService: HttpService) {}

  public getUserById(
    id: string,
    token: string
  ): Promise<void | { summary: IUsersState }> {
    return this.httpService.get(`api/users/summary/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const factory = new HttpServiceInstances();
export const usersService = new UsersService(factory.createAxiosHttpService());
